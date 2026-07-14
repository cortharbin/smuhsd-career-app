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
  displayTrustLevel,
  getLocationOptions,
  getOpportunities,
  paginate
} from "@/lib/data";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

const filterControlClass = "mt-1 h-9 text-xs sm:h-10 sm:text-sm";

export default async function OpportunitiesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const filters = {
    type: first(params.type),
    location: first(params.location),
    paid: first(params.paid),
    career: first(params.career),
    verification: first(params.verification),
    age: first(params.age),
    grade: first(params.grade),
    sort: first(params.sort)
  };
  const requestedPage = Number(first(params.page) ?? "1");
  const opportunities = await getOpportunities(filters);
  const locationOptions = getLocationOptions();
  const page = paginate(opportunities, Number.isFinite(requestedPage) ? requestedPage : 1, 24);
  const visibleOpportunities = page.items;

  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="page-kicker">
            <Search className="h-4 w-4" aria-hidden="true" />
            Student opportunity browser
          </div>
          <h1 className="page-title mt-2 text-3xl font-semibold sm:text-4xl">Opportunities</h1>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Search the real starter data. Verification labels stay visible on every card.
          </p>
        </div>
        <span className="rounded-full border border-teal-100 bg-white px-3 py-1.5 text-sm font-semibold text-teal-900 shadow-sm">
          {visibleOpportunities.length} shown
          {opportunities.length > visibleOpportunities.length ? ` of ${opportunities.length}` : ""} results
        </span>
      </div>

      <form className="section-enter filter-shell mb-6 grid gap-3 rounded-lg p-3 sm:grid-cols-2 sm:gap-4 sm:p-4 lg:grid-cols-4">
        <label className="text-xs font-medium sm:text-sm">
          Type
          <Select name="type" defaultValue={filters.type ?? "all"} className={filterControlClass}>
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
        <label className="text-xs font-medium sm:text-sm">
          Location / Area Code
          <Select name="location" defaultValue={filters.location ?? "all"} className={filterControlClass}>
            <option value="all">All area codes</option>
            {locationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Age
          <Select name="age" defaultValue={filters.age ?? ""} aria-label="Age filter" className={filterControlClass}>
            <option value="">Any age</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
          </Select>
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Grade
          <Select name="grade" defaultValue={filters.grade ?? ""} aria-label="Grade filter" className={filterControlClass}>
            <option value="">Any grade</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </Select>
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Paid/unpaid
          <Select name="paid" defaultValue={filters.paid ?? "all"} className={filterControlClass}>
            <option value="all">Any</option>
            <option value="paid">Paid</option>
            <option value="unpaid">Unpaid</option>
          </Select>
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Career Tag
          <Input name="career" defaultValue={filters.career ?? ""} className={filterControlClass} />
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Verification
          <Select name="verification" defaultValue={filters.verification ?? "all"} className={filterControlClass}>
            <option value="all">Any status</option>
            <option value="ACTIVE_VERIFIED">Verified</option>
            <option value="UNVERIFIED">Unverified</option>
            <option value="ARCHIVED">Archived</option>
          </Select>
        </label>
        <label className="text-xs font-medium sm:text-sm">
          Sort
          <Select name="sort" defaultValue={filters.sort ?? ""} className={filterControlClass}>
            <option value="">Recommended</option>
            <option value="trust_asc">Least trusted first</option>
            <option value="trust_desc">Most trusted first</option>
          </Select>
        </label>
        <div className="flex items-end gap-2 sm:col-span-2 lg:col-span-4">
          <button className="button-pop inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-3 text-xs font-semibold text-white shadow-sm transition-all duration-200 hover:bg-teal-800 sm:h-10 sm:px-4 sm:text-sm">
            <Search className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
            Filter
          </button>
          <Link href="/opportunities" prefetch={false} className="button-pop inline-flex h-9 items-center rounded-md border bg-white px-3 text-xs font-semibold transition-colors hover:border-teal-700 hover:text-teal-900 sm:h-10 sm:px-4 sm:text-sm">
            Clear
          </Link>
        </div>
      </form>

      <div className="grid gap-4">
        {visibleOpportunities.map((opportunity, index) => (
          <Card
            key={opportunity.id}
            style={{ animationDelay: `${Math.min(index, 12) * 24}ms` }}
            className={`section-enter opportunity-card p-5 pl-6 ${opportunity.highlighted ? "border-amber-300" : ""} ${
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
                  <Badge className={trustClass(displayTrustLevel(opportunity))}>
                    {displayTrustLevel(opportunity)}
                  </Badge>
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
                  <Link href={`/opportunities/${opportunity.id}`} prefetch={false} className="hover:underline">
                    {opportunity.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
                  {opportunity.description || opportunity.summary || "Details need verification from the source."}
                </p>
              </div>
              <Link
                href={`/opportunities/${opportunity.id}`}
                prefetch={false}
                className="button-pop inline-flex h-10 shrink-0 items-center gap-2 rounded-md border bg-white px-3 text-sm font-semibold transition-colors hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900"
              >
                Details
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <dl className="mt-4 grid gap-3 border-t border-slate-100 pt-4 text-sm sm:grid-cols-2 lg:grid-cols-6">
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
      <Pagination
        currentPage={page.currentPage}
        totalPages={page.totalPages}
        params={params}
      />
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

function trustClass(level: string) {
  if (level.includes("approved") || level.includes("Verified") || level.includes("created")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }
  if (level === "Archived" || level === "Hidden") return "border-red-200 bg-red-50 text-red-800";
  return "border-slate-200 bg-slate-50 text-slate-700";
}

function Pagination({
  currentPage,
  totalPages,
  params
}: {
  currentPage: number;
  totalPages: number;
  params: Record<string, string | string[] | undefined>;
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).filter(
    (page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2
  );

  return (
    <nav className="mt-6 flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link href={pageHref(params, currentPage - 1)} prefetch={false} className="pagination-link">
          Previous
        </Link>
      )}
      {pages.map((page, index) => (
        <span key={page} className="inline-flex items-center gap-2">
          {index > 0 && page - pages[index - 1] > 1 && (
            <span className="px-1 text-sm font-semibold text-muted-foreground">...</span>
          )}
          <Link
            href={pageHref(params, page)}
            prefetch={false}
            className={`pagination-link ${page === currentPage ? "pagination-link-active" : ""}`}
          >
            {page}
          </Link>
        </span>
      ))}
      {currentPage < totalPages && (
        <Link href={pageHref(params, currentPage + 1)} prefetch={false} className="pagination-link">
          Next
        </Link>
      )}
    </nav>
  );
}

function pageHref(params: Record<string, string | string[] | undefined>, page: number) {
  const next = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    const firstValue = Array.isArray(value) ? value[0] : value;
    if (firstValue && key !== "page") next.set(key, firstValue);
  }
  if (page > 1) next.set("page", String(page));
  const query = next.toString();
  return query ? `/opportunities?${query}` : "/opportunities";
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-medium">{label}</dt>
      <dd className="mt-1 text-muted-foreground">{value}</dd>
    </div>
  );
}
