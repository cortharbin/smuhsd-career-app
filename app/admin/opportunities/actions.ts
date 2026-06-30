"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { getAdminCode } from "@/lib/admin-code";
import { databaseIsConfigured, prisma } from "@/lib/prisma";

function requireAdminCode(formData: FormData) {
  const adminCode = getAdminCode();
  const code = String(formData.get("adminCode") ?? "");
  if (code !== adminCode) {
    redirect("/admin/opportunities?error=1");
  }
  return code;
}

function adminPath(code: string, tab?: string) {
  const params = new URLSearchParams({ code });
  if (tab) params.set("tab", tab);
  return `/admin/opportunities?${params.toString()}`;
}

function normalizeVerification(value: string) {
  if (value === "Verified") return "ACTIVE_VERIFIED";
  if (value === "Archived") return "ARCHIVED";
  if (value === "Pending") return "NEEDS_REVIEW";
  return "UNVERIFIED";
}

export async function updateOpportunityVerification(formData: FormData) {
  const code = requireAdminCode(formData);
  const opportunityId = String(formData.get("opportunityId") ?? "");
  const verification = normalizeVerification(String(formData.get("verificationStatus") ?? ""));

  if (databaseIsConfigured() && opportunityId) {
    await prisma.opportunity.updateMany({
      where: {
        OR: [{ id: opportunityId }, { externalId: opportunityId }]
      },
      data: {
        verificationStatus: verification as "ACTIVE_VERIFIED" | "ARCHIVED" | "NEEDS_REVIEW" | "UNVERIFIED",
        lastVerifiedAt: verification === "ACTIVE_VERIFIED" ? new Date() : null
      }
    });
  }

  revalidatePath("/admin/opportunities");
  revalidatePath("/opportunities");
  redirect(adminPath(code, "search"));
}

export async function updateOpportunityManagement(formData: FormData) {
  const code = requireAdminCode(formData);
  const opportunityId = String(formData.get("opportunityId") ?? "");
  const action = String(formData.get("action") ?? "");

  if (databaseIsConfigured() && opportunityId) {
    if (action === "highlight") {
      await prisma.opportunity.updateMany({
        where: { OR: [{ id: opportunityId }, { externalId: opportunityId }] },
        data: { highlighted: true, trustLevel: "Admin highlighted" }
      });
    }
    if (action === "unhighlight") {
      await prisma.opportunity.updateMany({
        where: { OR: [{ id: opportunityId }, { externalId: opportunityId }] },
        data: { highlighted: false, trustLevel: "Source lead" }
      });
    }
    if (action === "hide") {
      await prisma.opportunity.updateMany({
        where: { OR: [{ id: opportunityId }, { externalId: opportunityId }] },
        data: { hidden: true, currentStatus: "hidden_by_admin" }
      });
    }
    if (action === "expire") {
      await prisma.opportunity.updateMany({
        where: { OR: [{ id: opportunityId }, { externalId: opportunityId }] },
        data: {
          verificationStatus: "ARCHIVED",
          currentStatus: "archived_by_admin",
          expiresAt: new Date()
        }
      });
    }
    if (action === "approve") {
      await prisma.opportunity.updateMany({
        where: { OR: [{ id: opportunityId }, { externalId: opportunityId }] },
        data: {
          verificationStatus: "ACTIVE_VERIFIED",
          currentStatus: "approved_by_admin",
          hidden: false,
          lastVerifiedAt: new Date(),
          trustLevel: "Admin approved"
        }
      });
    }
  }

  revalidatePath("/admin/opportunities");
  revalidatePath("/opportunities");
  redirect(adminPath(code, "search"));
}

const createSchema = z.object({
  organizationName: z.string().min(2),
  title: z.string().min(2),
  type: z.enum(["JOB", "INTERNSHIP", "PROGRAM", "VOLUNTEER", "EVENT", "TRAINING_PATHWAY", "STUDENT_RESOURCE"]),
  locationText: z.string().optional(),
  description: z.string().min(5),
  gradeRequirement: z.string().optional(),
  paid: z.enum(["unknown", "paid", "unpaid"]),
  compensationText: z.string().optional(),
  deadlineText: z.string().optional(),
  applyUrl: z.string().optional()
});

export async function addOpportunity(formData: FormData) {
  const code = requireAdminCode(formData);
  const parsed = createSchema.parse({
    organizationName: formData.get("organizationName"),
    title: formData.get("title"),
    type: formData.get("type"),
    locationText: formData.get("locationText") || undefined,
    description: formData.get("description"),
    gradeRequirement: formData.get("gradeRequirement") || undefined,
    paid: formData.get("paid"),
    compensationText: formData.get("compensationText") || undefined,
    deadlineText: formData.get("deadlineText") || undefined,
    applyUrl: formData.get("applyUrl") || undefined
  });

  if (databaseIsConfigured()) {
    await prisma.opportunity.create({
      data: {
        organizationName: parsed.organizationName,
        title: parsed.title,
        type: parsed.type,
        locationText: parsed.locationText,
        city: parsed.locationText,
        description: parsed.description,
        gradeRequirement: parsed.gradeRequirement,
        paid: parsed.paid === "unknown" ? null : parsed.paid === "paid",
        compensationText: parsed.compensationText,
        deadlineText: parsed.deadlineText,
        applyUrl: parsed.applyUrl,
        verificationStatus: "NEEDS_REVIEW",
        currentStatus: "admin_created_pending_review",
        trustLevel: "Admin created"
      }
    });
  }

  revalidatePath("/admin/opportunities");
  revalidatePath("/opportunities");
  redirect(adminPath(code, "search"));
}

export async function updateSubmissionStatus(formData: FormData) {
  const code = requireAdminCode(formData);
  const submissionId = String(formData.get("submissionId") ?? "");
  const status = String(formData.get("status") ?? "PENDING");

  if (databaseIsConfigured() && submissionId) {
    await prisma.employerSubmission.updateMany({
      where: { id: submissionId },
      data: {
        status: status as "PENDING" | "APPROVED" | "REJECTED"
      }
    });
  }

  revalidatePath("/admin/opportunities");
  redirect(adminPath(code, "submissions"));
}
