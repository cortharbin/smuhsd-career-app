import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, ArrowLeft, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, Textarea } from "@/components/ui/input";
import { displayAgeGrade, displayDeadline, displayPay, displayStatus, displayType, getOpportunity } from "@/lib/data";
import { reportListing } from "./actions";

export default async function OpportunityDetailPage({
  params
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const opportunity = await getOpportunity(id);

  if (!opportunity) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link href="/opportunities" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to opportunities
      </Link>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          <Badge>{displayType(opportunity.type)}</Badge>
          <Badge className={statusClass(opportunity.verificationStatus)}>{displayStatus(opportunity.verificationStatus)}</Badge>
          <Badge>{displayPay(opportunity)}</Badge>
        </div>
        <h1 className="mt-4 text-3xl font-semibold tracking-normal">{opportunity.title}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{opportunity.organizationName}</p>
      </div>

      {opportunity.workPermitLikely && (
        <div className="mt-6 flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 text-amber-950">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>
            This looks like paid work for a student who may be under 18. Check the
            work permit guide and your school College & Career Center before starting.
          </p>
        </div>
      )}

      <div className="mt-6 grid gap-6">
        <Card className="p-5">
          <h2 className="text-lg font-semibold">Description</h2>
          <p className="mt-3 whitespace-pre-line text-muted-foreground">
            {opportunity.description || opportunity.summary || "No full description was included in the source data."}
          </p>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold">Requirements and Next Step</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <Fact label="Age or grade requirement" value={displayAgeGrade(opportunity)} />
            <Fact label="Location" value={opportunity.locationText || "Not listed"} />
            <Fact label="Pay/stipend" value={displayPay(opportunity)} />
            <Fact label="Deadline" value={displayDeadline(opportunity.deadlineText)} />
            <Fact label="Schedule" value={opportunity.scheduleText || "Not listed"} />
            <Fact label="Contact" value={opportunity.contactText || "Not listed"} />
          </dl>
          {opportunity.applyUrl && (
            <a
              href={opportunity.applyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
            >
              Open application/source
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold">Source and Verification</h2>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <Fact label="Verification status" value={displayStatus(opportunity.verificationStatus)} />
            <Fact label="Current source status" value={opportunity.currentStatus || "Not listed"} />
            <Fact label="Source file" value={opportunity.sourceFile || "Not listed"} />
            <Fact label="Source sheet/row" value={[opportunity.sourceSheet, opportunity.sourceRow].filter(Boolean).join(" / ") || "Not listed"} />
            <Fact label="Original source ID" value={opportunity.sourceRecordId || "Not listed"} />
            <Fact label="Source URL/contact" value={opportunity.sourceUrl || opportunity.contactText || "Not listed"} />
          </dl>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold">Report this listing</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Reports go to the admin page for review and do not automatically change this listing.
          </p>
          <form action={reportListing} className="mt-4 grid gap-3">
            <input type="hidden" name="opportunityId" value={opportunity.id} />
            <label className="grid gap-1 text-sm font-medium">
              Reason
              <Select name="reason" defaultValue="Expired">
                <option value="Expired">Expired</option>
                <option value="Suspicious">Suspicious</option>
                <option value="Inaccurate">Inaccurate</option>
                <option value="Unsafe">Unsafe</option>
                <option value="Other">Other</option>
              </Select>
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Details
              <Textarea name="details" />
            </label>
            <Button type="submit" className="sm:w-fit">Send report</Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

function statusClass(status: string) {
  if (status === "ACTIVE_VERIFIED") return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (status === "ARCHIVED") return "border-red-200 bg-red-50 text-red-800";
  return "border-orange-200 bg-orange-50 text-orange-900";
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium">{label}</dt>
      <dd className="mt-1 break-words text-sm text-muted-foreground">{value}</dd>
    </div>
  );
}
