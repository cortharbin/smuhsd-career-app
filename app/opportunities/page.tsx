import Link from "next/link";
import { AlertCircle, ExternalLink, Search, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input, Select } from "@/components/ui/input";
import {
  displayDeadline,
  displayAgeGrade,
  displayStatus,
  displayType,
  displayPay,
  getLocationOptions,
  getOpportunities
} from "@/lib/data";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function OpportunitiesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const filters = {
    type: first(params.type),
    location: first(params.location),
    paid: first(params.paid),
    career: first(params.career),
    verification: first(params.verification),
    age: first(params.age)
  };
  const opportunities = await getOpportunities(filters);
  const locationOptions = getLocationOptions();
  const visibleOpportunities = opportunities.slice(0, 80);
  const hiddenResultCount = Math.max(opportunities.length - visibleOpportunities.length, 0);

  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-normal">Opportunities</h1>
          <p className="mt-2 text-muted-foreground">
            Search the real starter data. Verification labels stay visible on every card.
          </p>
        </div>
        <span className="text-sm text-muted-foreground">
          {visibleOpportunities.length} shown
          {hiddenResultCount > 0 ? ` of ${opportunities.length}` : ""} results
        </span>
      </div>

      <form className="section-enter mb-6 grid gap-3 rounded-lg border bg-white p-4 shadow-sm md:grid-cols-3 lg:grid-cols-6">
        <label className="text-sm font-medium">
          Type
          <Select name="type" defaultValue={filters.type ?? "all"} className="mt-1">
            <option value="all">All types</option>
            <option value="JOB">Jobs</option>
            <option value="INTERNSHIP">Internships</option>
            <option value="PROGRAM">Programs</option>
            <option value="VOLUNTEER">Volunteering</option>
            <option value="EVENT">Events</option>
            <option value="TRAINING_PATHWAY">Career pathways</option>
            <option value="STUDENT_RESOURCE">Resources</option>
          </Select>
        </label>
        <label className="text-sm font-medium">
          Location / Area Code
          <Select name="location" defaultValue={filters.location ?? "all"} className="mt-1">
            <option value="all">All area codes</option>
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <span className="mt-1 block text-xs text-muted-foreground">Enter area code only.</span>
        </label>
        <label className="text-sm font-medium">
          Age
          <Input name="age" type="number" min="12" max="21" defaultValue={filters.age ?? ""} className="mt-1" />
        </label>
        <label className="text-sm font-medium">
          Paid/unpaid
          <Select name="paid" defaultValue={filters.paid ?? "all"} className="mt-1">
            <option value="all">Any</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </Select>
        </label>
        <label className="text-sm font-medium">
          Career Tag
          <Input name="career" defaultValue={filters.career ?? ""} className="mt-1" />
        </label>
        <label className="text-sm font-medium">
          Verification
          <Select name="verification" defaultValue={filters.verification ?? "all"} className="mt-1">
            <option value="all">Any status</option>
            <option value="ACTIVE_VERIFIED">Verified</option>
            <option value="UNVERIFIED">Unverified</option>
            <option value="ARCHIVED">Archived</option>
          </Select>
        </label>
        <div className="flex items-end gap-2 md:col-span-3 lg:col-span-6">
          <button className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-white">
            <Search className="h-4 w-4" aria-hidden="true" />
            Filter
          </button>
          <Link href="/opportunities" className="inline-flex h-10 items-center rounded-md border bg-white px-4 text-sm font-medium">
            Clear Filters
          </Link>
        </div>
      </form>

      {hiddenResultCount > 0 && (
        <p className="mb-4 rounded-md border border-teal-100 bg-teal-50 px-3 py-2 text-sm text-teal-900">
          Showing the first {visibleOpportunities.length} results for speed. Use filters to narrow the list.
        </p>
      )}

      <div className="grid gap-4">
        {visibleOpportunities.map((opportunity, index) => (
          <Card
            key={opportunity.id}
            style={{ animationDelay: `${Math.min(index, 12) * 24}ms` }}
            className={`section-enter p-5 ${opportunity.highlighted ? "border-amber-300" : ""} ${
              opportunity.verificationStatus === "ARCHIVED" ? "border-red-200 bg-red-50/40" : ""
            }`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge className={statusClass(opportunity.verificationStatus)}>
                    {displayStatus(opportunity.verificationStatus)}
                  </Badge>
                  <Badge className={payClass(opportunity.paid)}>{displayPay(opportunity)}</Badge>
                  {opportunity.verificationStatus === "ARCHIVED" && (
                    <Badge className="border-red-200 bg-red-50 text-red-800">May be back soon</Badge>
                  )}
                  {opportunity.highlighted && (
                    <Badge className="border-amber-200 bg-amber-50 text-amber-900">
                      <Star className="mr-1 h-3 w-3 fill-amber-400" aria-hidden="true" />
                      Highlighted
                    </Badge>
                  )}
                </div>
                <h2 className="mt-3 text-xl font-semibold tracking-normal">
                  <Link href={`/opportunities/${opportunity.id}`} className="hover:underline">
                    {opportunity.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                  {opportunity.description || opportunity.summary || "Details need verification from the source."}
                </p>
              </div>
              <Link
                href={`/opportunities/${opportunity.id}`}
                className="inline-flex shrink-0 items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted"
              >
                Details
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-4 grid gap-3 border-t pt-4 text-sm sm:grid-cols-2 lg:grid-cols-6">
              <Fact label="Location" value={opportunity.locationText || "Not listed"} />
              <Fact label="Age/grade" value={displayAgeGrade(opportunity)} />
              <Fact label="Deadline" value={displayDeadline(opportunity.deadlineText)} />
              <Fact label="Source" value={[opportunity.sourceSheet, opportunity.sourceRow].filter(Boolean).join(" row ") || "Seed data"} />
              <Fact label="Type" value={displayType(opportunity.type)} />
              <Fact label="Pay" value={displayPay(opportunity)} />
            </dl>
            {opportunity.workPermitLikely && (
              <p className="mt-4 inline-flex items-center gap-2 rounded-md bg-amber-50 px-3 py-2 text-sm text-amber-900">
                <AlertCircle className="h-4 w-4" aria-hidden="true" />
                Paid work for students under 18 usually requires a work permit.
              </p>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}

function statusClass(status: string) {
  if (status === "ACTIVE_VERIFIED") return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (status === "ARCHIVED") return "border-red-200 bg-red-50 text-red-800";
  return "border-orange-200 bg-orange-50 text-orange-900";
}

function payClass(paid: boolean | null) {
  if (paid) return "border-emerald-200 bg-emerald-50 text-emerald-800";
  return "border-gray-200 bg-gray-50 text-gray-700";
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-medium">{label}</dt>
      <dd className="mt-1 text-muted-foreground">{value}</dd>
    </div>
  );
}
