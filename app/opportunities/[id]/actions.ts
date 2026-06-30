"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import { databaseIsConfigured, prisma } from "@/lib/prisma";

const reportSchema = z.object({
  opportunityId: z.string().min(1),
  reason: z.enum(["Expired", "Suspicious", "Inaccurate", "Unsafe"]),
  details: z.string().max(800).optional()
});

export async function reportListing(formData: FormData) {
  const parsed = reportSchema.parse({
    opportunityId: formData.get("opportunityId"),
    reason: formData.get("reason"),
    details: formData.get("details") || undefined
  });

  if (databaseIsConfigured()) {
    await prisma.listingReport.create({
      data: parsed
    });
  }

  revalidatePath("/admin/opportunities");
  redirect(`/opportunities/${parsed.opportunityId}?reported=1`);
}
