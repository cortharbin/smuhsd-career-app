"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { databaseIsConfigured, prisma } from "@/lib/prisma";

const reportSchema = z.object({
  opportunityId: z.string().min(1),
  reason: z.enum(["Expired", "Suspicious", "Inaccurate", "Unsafe", "Other"]),
  details: z.string().max(800).optional()
});

export async function reportListing(formData: FormData) {
  const parsedResult = reportSchema.safeParse({
    opportunityId: formData.get("opportunityId"),
    reason: formData.get("reason"),
    details: formData.get("details") || undefined
  });

  if (!parsedResult.success) {
    redirect("/opportunities?reportError=1");
  }

  const parsed = parsedResult.data;

  if (databaseIsConfigured()) {
    await prisma.listingReport.create({
      data: parsed
    });
  }

  revalidatePath("/admin/opportunities");
  redirect(`/opportunities/${encodeURIComponent(parsed.opportunityId)}?reported=1`);
}
