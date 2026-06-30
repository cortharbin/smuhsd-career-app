"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { databaseIsConfigured, prisma } from "@/lib/prisma";

const schema = z.object({
  organizationName: z.string().min(2),
  title: z.string().min(2),
  type: z.enum(["JOB", "INTERNSHIP", "PROGRAM", "VOLUNTEER", "EVENT", "TRAINING_PATHWAY", "STUDENT_RESOURCE"]),
  locationText: z.string().optional(),
  description: z.string().min(10),
  gradeRequirement: z.string().optional(),
  paid: z.enum(["unknown", "paid", "unpaid"]),
  compensationText: z.string().optional(),
  deadlineText: z.string().optional(),
  applyUrl: z.string().optional(),
  contactText: z.string().optional(),
  contactName: z.string().optional(),
  contactEmail: z.string().email()
});

export async function submitOpportunity(formData: FormData) {
  const parsed = schema.parse({
    organizationName: formData.get("organizationName"),
    title: formData.get("title"),
    type: formData.get("type"),
    locationText: formData.get("locationText") || undefined,
    description: formData.get("description"),
    gradeRequirement: formData.get("gradeRequirement") || undefined,
    paid: formData.get("paid"),
    compensationText: formData.get("compensationText") || undefined,
    deadlineText: formData.get("deadlineText") || undefined,
    applyUrl: formData.get("applyUrl") || undefined,
    contactText: formData.get("contactText") || undefined,
    contactName: formData.get("contactName") || undefined,
    contactEmail: formData.get("contactEmail")
  });

  if (!databaseIsConfigured()) {
    throw new Error("DATABASE_URL and DIRECT_URL are required before submissions can be saved.");
  }

  await prisma.employerSubmission.create({
    data: {
      organizationName: parsed.organizationName,
      title: parsed.title,
      type: parsed.type,
      locationText: parsed.locationText,
      description: parsed.description,
      gradeRequirement: parsed.gradeRequirement,
      paid: parsed.paid === "unknown" ? null : parsed.paid === "paid",
      compensationText: parsed.compensationText,
      deadlineText: parsed.deadlineText,
      applyUrl: parsed.applyUrl,
      contactText: parsed.contactText,
      contactName: parsed.contactName,
      contactEmail: parsed.contactEmail,
      status: "PENDING"
    }
  });

  revalidatePath("/admin/opportunities");
  redirect("/submit?submitted=1");
}
