import Link from "next/link";
import { Lock, Plus, Search, ShieldAlert, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/input";
import {
  displayDeadline,
  displayAgeGrade,
  displayStatus,
  displayTrustLevel,
  displayType,
  getAdminOpportunities,
  getAdminSubmissions,
  getListingReports,
  paginate,
  publicVerificationValue
} from "@/lib/data";
import { isAdminCodeValid } from "@/lib/admin-code";
import {
  addOpportunity,
  updateOpportunityManagement,
  updateOpportunityVerification,
  updateSubmissionStatus
} from "./actions";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const tabs = [
  { id: "pending", label: "Pending Verification" },
  { id: "archived", label: "Archived" },
  { id: "search", label: "Search" },
  { id: "reports", label: "Reports" },
  { id: "submissions", label: "Submitted Opportunities" },
  { id: "add", label: "Add Opportunity" }
];

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function AdminOpportunitiesPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const code = first(params.code);

  if (!isAdminCodeValid(code)) {
    return <AdminCodeGate showError={params.error === "1"} />;
  }

  const activeTab = first(params.tab) ?? "pending";
  const query = (first(params.q) ?? "").toLowerCase();
  const typeFilter = first(params.type) ?? "all";
  const verificationFilter = first(params.verification) ?? "all";
  const locationFilter = (first(params.location) ?? "").toLowerCase();
  const trustSort = first(params.sort) ?? "none";
  const requestedPage = Number(first(params.page) ?? "1");
  const opportunities = await getAdminOpportunities();
  const reports = await getListingReports();
  const submissions = await getAdminSubmissions();

  const filtered = opportunities.filter((item) => {
    const text = [
      item.title,
      item.organizationName,
      item.description,
      item.summary,
      item.gradeRequirement,
      item.compensationText,
      item.deadlineText,
      item.locationText,
      item.currentStatus,
      item.tags.join(" ")
    ]
      .join(" ")
      .toLowerCase();
    if (query && !text.includes(query)) return false;
    if (typeFilter !== "all" && item.type !== typeFilter) return false;
    if (verificationFilter !== "all" && publicVerificationValue(item.verificationStatus) !== verificationFilter) {
      return false;
    }
    if (locationFilter && !item.locationText.toLowerCase().includes(locationFilter)) return false;
    return true;
  });
  const sortedFiltered = sortAdminOpportunities(filtered, trustSort);

  const pending = opportunities.filter((item) => publicVerificationValue(item.verificationStatus) === "UNVERIFIED");
  const archived = opportunities.filter((item) => item.verificationStatus === "ARCHIVED");
  const filteredPending = sortedFiltered.filter((item) => publicVerificationValue(item.verificationStatus) === "UNVERIFIED");
  const filteredArchived = sortedFiltered.filter((item) => item.verificationStatus === "ARCHIVED");

  return (
    <div className="page-enter mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="page-kicker">
            <ShieldAlert className="h-4 w-4" aria-hidden="true" />
            Counselor admin
          </div>
          <h1 className="page-title mt-2 text-3xl font-semibold sm:text-4xl">Opportunity Management</h1>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Enter the admin code each time you access this page. TODO: replace this MVP code check with real authentication before launch.
          </p>
        </div>
        <Link href="/admin/opportunities" className="button-pop inline-flex h-10 items-center justify-center gap-2 rounded-md bg-foreground px-4 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:shadow-md">
          <Lock className="h-4 w-4" aria-hidden="true" />
          Lock admin
        </Link>
      </div>

      <section className="section-enter mt-6 grid gap-3 sm:grid-cols-4">
        <AdminStat label="Pending" value={pending.length.toString()} />
        <AdminStat label="Archived" value={archived.length.toString()} />
        <AdminStat label="Reports" value={reports.length.toString()} />
        <AdminStat label="Submitted" value={submissions.length.toString()} />
      </section>

      <nav className="section-enter filter-shell mt-6 flex flex-wrap gap-2 rounded-lg p-2">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={adminHref(code, { tab: tab.id })}
            className={`rounded-md px-3 py-2 text-sm font-semibold transition-all duration-200 ${
              activeTab === tab.id ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:bg-white hover:text-teal-900 hover:shadow-sm"
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>

      {first(params.error) === "database" && (
        <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
          Admin changes need a configured database. The seed fallback can be browsed, but it cannot save updates.
        </div>
      )}

      {activeTab === "pending" && (
        <section className="mt-6">
          <AdminFilters
            code={code}
            tab="pending"
            query={first(params.q) ?? ""}
            type={typeFilter}
            verification={verificationFilter}
            location={first(params.location) ?? ""}
            sort={trustSort}
          />
          <AdminTable
            code={code}
            opportunities={filteredPending}
            title="Pending Verification"
            showControls
            currentPage={requestedPage}
            pageValues={adminPageValues(params, "pending")}
          />
        </section>
      )}

      {activeTab === "archived" && (
        <AdminTable
          code={code}
          opportunities={filteredArchived}
          title="Archived"
          showControls
          currentPage={requestedPage}
          pageValues={adminPageValues(params, "archived")}
        />
      )}

      {activeTab === "search" && (
        <section className="mt-6">
          <AdminFilters
            code={code}
            tab="search"
            query={first(params.q) ?? ""}
            type={typeFilter}
            verification={verificationFilter}
            location={first(params.location) ?? ""}
            sort={trustSort}
          />
          <AdminTable
            code={code}
            opportunities={sortedFiltered}
            title="Search Results"
            showControls
            currentPage={requestedPage}
            pageValues={adminPageValues(params, "search")}
          />
        </section>
      )}

      {activeTab === "reports" && <ReportsTab reports={reports} />}

      {activeTab === "submissions" && <SubmissionsTab code={code} submissions={submissions} />}

      {activeTab === "add" && <AddOpportunityTab code={code} showValidationError={first(params.error) === "validation"} />}
    </div>
  );
}

function AdminCodeGate({ showError }: { showError: boolean }) {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md items-center px-4 py-12">
      <Card className="w-full p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted">
          <Lock className="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <h1 className="mt-5 text-2xl font-semibold tracking-normal">Admin Code Required</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Enter the admin code each time you open the admin page.
        </p>
        {showError && (
          <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
            That code did not work. Try again.
          </p>
        )}
        <form className="mt-5 grid gap-3">
          <label className="grid gap-1 text-sm font-medium">
            Admin code
            <Input name="code" type="password" autoComplete="off" required />
          </label>
          <Button type="submit">Enter admin</Button>
        </form>
      </Card>
    </div>
  );
}

function AdminFilters({
  code,
  tab,
  query,
  type,
  verification,
  location,
  sort
}: {
  code: string;
  tab: string;
  query: string;
  type: string;
  verification: string;
  location: string;
  sort: string;
}) {
  return (
    <form className="section-enter filter-shell mb-5 grid gap-3 rounded-lg p-4 md:grid-cols-3 xl:grid-cols-6">
      <input type="hidden" name="code" value={code} />
      <input type="hidden" name="tab" value={tab} />
      <label className="text-sm font-medium">
        Search
        <Input name="q" defaultValue={query} className="mt-1" />
      </label>
      <label className="text-sm font-medium">
        Type
        <Select name="type" defaultValue={type} className="mt-1">
          <option value="all">All types</option>
          <option value="JOB">Job</option>
          <option value="INTERNSHIP">Internship</option>
          <option value="PROGRAM">Program</option>
          <option value="VOLUNTEER">Volunteer</option>
          <option value="EVENT">Event</option>
          <option value="TRAINING_PATHWAY">Career pathway</option>
          <option value="STUDENT_RESOURCE">Student resource</option>
        </Select>
      </label>
      <label className="text-sm font-medium">
        Verification
        <Select name="verification" defaultValue={verification} className="mt-1">
          <option value="all">All</option>
          <option value="ACTIVE_VERIFIED">Verified</option>
          <option value="UNVERIFIED">Unverified</option>
          <option value="ARCHIVED">Archived</option>
        </Select>
      </label>
      <label className="text-sm font-medium">
        Location
        <Input name="location" defaultValue={location} className="mt-1" />
      </label>
      <label className="text-sm font-medium">
        Trust order
        <Select name="sort" defaultValue={sort} className="mt-1">
          <option value="none">Default</option>
          <option value="trust_asc">Least trusted first</option>
          <option value="trust_desc">Most trusted first</option>
        </Select>
      </label>
      <div className="flex items-end gap-2">
        <Button type="submit" className="gap-2">
          <Search className="h-4 w-4" aria-hidden="true" />
          Filter
        </Button>
        <Link href={adminHref(code, { tab })} className="button-pop inline-flex h-10 whitespace-nowrap items-center rounded-md border bg-white px-3 text-sm font-semibold transition-colors hover:border-teal-700 hover:text-teal-800">
          Clear
        </Link>
      </div>
    </form>
  );
}

function AdminTable({
  code,
  opportunities,
  title,
  showControls,
  currentPage,
  pageValues
}: {
  code: string;
  opportunities: Awaited<ReturnType<typeof getAdminOpportunities>>;
  title: string;
  showControls?: boolean;
  currentPage: number;
  pageValues: Record<string, string>;
}) {
  const page = paginate(opportunities, Number.isFinite(currentPage) ? currentPage : 1, 25);

  return (
    <section className="mt-6">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-semibold">{title}</h2>
        <Badge className="border-teal-100 bg-teal-50 text-teal-900">{opportunities.length} records</Badge>
      </div>
      <div className="app-surface overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="subtle-table min-w-full text-left text-sm">
            <thead className="bg-teal-50/80 text-teal-950">
              <tr>
                <Th>Listing</Th>
                <Th>Type</Th>
                <Th>Verification</Th>
                <Th>Trust</Th>
                <Th>Location</Th>
                <Th>Deadline</Th>
                <Th>Manage</Th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white/80">
              {page.items.map((opportunity) => (
                <tr key={opportunity.id} className="align-top transition-colors hover:bg-teal-50/60">
                  <Td>
                    <Link href={`/opportunities/${opportunity.id}`} className="font-medium text-foreground hover:underline">
                      {opportunity.highlighted && <Star className="mr-1 inline h-3.5 w-3.5 fill-amber-400 text-amber-500" aria-hidden="true" />}
                      {opportunity.pinned && <span className="mr-1 inline text-xs font-semibold text-teal-700">Pinned</span>}
                      {opportunity.title}
                    </Link>
                    <div className="mt-1 text-xs text-muted-foreground">{opportunity.organizationName}</div>
                  </Td>
                  <Td>{displayType(opportunity.type)}</Td>
                  <Td>
                    {showControls ? (
                      <form action={updateOpportunityVerification} className="grid min-w-44 gap-2">
                        <input type="hidden" name="adminCode" value={code} />
                        <input type="hidden" name="opportunityId" value={opportunity.id} />
                        <Select name="verificationStatus" defaultValue={adminVerificationLabel(opportunity.verificationStatus)} className="min-w-44">
                          <option value="Verified">Verified</option>
                          <option value="Unverified">Unverified</option>
                          <option value="Pending">Pending</option>
                          <option value="Archived">Archived</option>
                        </Select>
                        <Button type="submit" className="h-8 px-3 text-xs">Save</Button>
                      </form>
                    ) : (
                      <Badge className={statusClass(opportunity.verificationStatus)}>{displayStatus(opportunity.verificationStatus)}</Badge>
                    )}
                  </Td>
                  <Td>
                    <Badge className={trustClass(displayTrustLevel(opportunity))}>{displayTrustLevel(opportunity)}</Badge>
                  </Td>
                  <Td>
                    <div>{opportunity.locationText || "Not listed"}</div>
                    <div className="mt-1 text-xs">{displayAgeGrade(opportunity)}</div>
                  </Td>
                  <Td>{displayDeadline(opportunity.deadlineText)}</Td>
                  <Td>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "approve",
                        opportunity.highlighted ? "unhighlight" : "highlight",
                        opportunity.pinned ? "unpin" : "pin",
                        "hide",
                        "expire"
                      ].map((action) => (
                        <form key={action} action={updateOpportunityManagement}>
                          <input type="hidden" name="adminCode" value={code} />
                          <input type="hidden" name="opportunityId" value={opportunity.id} />
                          <input type="hidden" name="action" value={action} />
                          <button className="button-pop rounded-md border bg-white px-2 py-1 text-xs font-semibold transition-colors hover:border-teal-700 hover:bg-teal-50 hover:text-teal-900" type="submit">
                            {buttonLabel(action)}
                          </button>
                        </form>
                      ))}
                    </div>
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AdminPagination code={code} currentPage={page.currentPage} totalPages={page.totalPages} pageValues={pageValues} />
    </section>
  );
}

function ReportsTab({ reports }: { reports: Awaited<ReturnType<typeof getListingReports>> }) {
  return (
    <section className="mt-6 grid gap-3">
      <h2 className="text-xl font-semibold">Listing Reports</h2>
      {reports.length === 0 && <Card className="p-4 text-sm text-muted-foreground">No reports yet.</Card>}
      {reports.map((report) => (
        <Card key={report.id} className="p-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="border-red-200 bg-red-50 text-red-800">{report.reason}</Badge>
            <Link href={`/opportunities/${report.opportunityId}`} className="font-medium hover:underline">
              {report.opportunityId}
            </Link>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{report.details || "No extra details provided."}</p>
          <p className="mt-2 text-xs text-muted-foreground">{formatReportDate(report.createdAt)}</p>
        </Card>
      ))}
    </section>
  );
}

function formatReportDate(value: Date | string) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Los_Angeles"
  }).format(new Date(value));
}

function SubmissionsTab({
  code,
  submissions
}: {
  code: string;
  submissions: Awaited<ReturnType<typeof getAdminSubmissions>>;
}) {
  return (
    <section className="mt-6 grid gap-3">
      <h2 className="text-xl font-semibold">Submitted Opportunity Requests</h2>
      {submissions.length === 0 && <Card className="p-4 text-sm text-muted-foreground">No submitted opportunity requests yet.</Card>}
      {submissions.map((submission) => (
        <Card key={submission.id} className="p-4">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h3 className="font-semibold">{submission.title}</h3>
              <p className="text-sm text-muted-foreground">{submission.organizationName} • {displayType(submission.type)}</p>
              <p className="mt-2 text-sm text-muted-foreground">{submission.description}</p>
            </div>
            <form action={updateSubmissionStatus} className="flex gap-2">
              <input type="hidden" name="adminCode" value={code} />
              <input type="hidden" name="submissionId" value={submission.id} />
              <Select name="status" defaultValue={submission.status}>
                <option value="PENDING">Pending</option>
                <option value="APPROVED">Approved</option>
                <option value="REJECTED">Rejected</option>
              </Select>
              <Button type="submit">Save</Button>
            </form>
          </div>
        </Card>
      ))}
    </section>
  );
}

function AddOpportunityTab({ code, showValidationError }: { code: string; showValidationError: boolean }) {
  return (
    <Card className="mt-6 p-5">
      <h2 className="flex items-center gap-2 text-xl font-semibold">
        <Plus className="h-5 w-5" aria-hidden="true" />
        Add Opportunity
      </h2>
      {showValidationError && (
        <p className="mt-4 rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
          Please complete the required fields before adding the opportunity.
        </p>
      )}
      <form action={addOpportunity} className="mt-4 grid gap-4">
        <input type="hidden" name="adminCode" value={code} />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Organization"><Input name="organizationName" required /></Field>
          <Field label="Title"><Input name="title" required /></Field>
          <Field label="Type">
            <Select name="type" defaultValue="INTERNSHIP">
              <option value="JOB">Job</option>
              <option value="INTERNSHIP">Internship</option>
              <option value="PROGRAM">Program</option>
              <option value="VOLUNTEER">Volunteer</option>
              <option value="EVENT">Event</option>
              <option value="TRAINING_PATHWAY">Career pathway</option>
              <option value="STUDENT_RESOURCE">Student resource</option>
            </Select>
          </Field>
          <Field label="Location"><Input name="locationText" /></Field>
          <Field label="Age/grade"><Input name="gradeRequirement" /></Field>
          <Field label="Pay">
            <Select name="paid" defaultValue="unknown">
              <option value="unknown">Unknown</option>
              <option value="paid">Paid</option>
              <option value="unpaid">Unpaid</option>
            </Select>
          </Field>
          <Field label="Pay range"><Input name="compensationText" /></Field>
          <Field label="Deadline"><Input name="deadlineText" placeholder="Jan 5, 2026" /></Field>
          <Field label="Application link"><Input name="applyUrl" /></Field>
        </div>
        <Field label="Description"><Textarea name="description" required /></Field>
        <Button type="submit" className="sm:w-fit">Add to Opportunities</Button>
      </form>
    </Card>
  );
}

function sortAdminOpportunities(
  opportunities: Awaited<ReturnType<typeof getAdminOpportunities>>,
  sort: string
) {
  if (sort === "trust_asc") {
    return [...opportunities].sort((a, b) => trustRankForAdmin(a) - trustRankForAdmin(b) || a.title.localeCompare(b.title));
  }
  if (sort === "trust_desc") {
    return [...opportunities].sort((a, b) => trustRankForAdmin(b) - trustRankForAdmin(a) || a.title.localeCompare(b.title));
  }
  return opportunities;
}

function trustRankForAdmin(opportunity: Awaited<ReturnType<typeof getAdminOpportunities>>[number]) {
  const level = displayTrustLevel(opportunity);
  if (level === "Archived") return 0;
  if (level === "Hidden") return 1;
  if (level === "Needs verification") return 2;
  if (level === "Source lead") return 3;
  if (level === "Verified source") return 4;
  if (level === "Admin created") return 5;
  if (level === "Admin highlighted") return 6;
  return 7;
}

function AdminPagination({
  code,
  currentPage,
  totalPages,
  pageValues
}: {
  code: string;
  currentPage: number;
  totalPages: number;
  pageValues: Record<string, string>;
}) {
  if (totalPages <= 1) return null;
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1).filter(
    (page) => page === 1 || page === totalPages || Math.abs(page - currentPage) <= 2
  );

  return (
    <nav className="mt-5 flex flex-wrap items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link href={adminHref(code, { ...pageValues, page: String(currentPage - 1) })} className="pagination-link">
          Previous
        </Link>
      )}
      {pages.map((page, index) => (
        <span key={page} className="inline-flex items-center gap-2">
          {index > 0 && page - pages[index - 1] > 1 && (
            <span className="px-1 text-sm font-semibold text-muted-foreground">...</span>
          )}
          <Link
            href={adminHref(code, { ...pageValues, page: String(page) })}
            className={`pagination-link ${page === currentPage ? "pagination-link-active" : ""}`}
          >
            {page}
          </Link>
        </span>
      ))}
      {currentPage < totalPages && (
        <Link href={adminHref(code, { ...pageValues, page: String(currentPage + 1) })} className="pagination-link">
          Next
        </Link>
      )}
    </nav>
  );
}

function adminPageValues(params: Record<string, string | string[] | undefined>, tab: string) {
  const values: Record<string, string> = { tab };
  for (const key of ["q", "type", "verification", "location", "sort"]) {
    const value = first(params[key]);
    if (value) values[key] = value;
  }
  return values;
}

function adminHref(code: string | undefined, values: Record<string, string>) {
  const params = new URLSearchParams();
  if (code) params.set("code", code);
  for (const [key, value] of Object.entries(values)) params.set(key, value);
  return `/admin/opportunities?${params.toString()}`;
}

function AdminStat({ label, value }: { label: string; value: string }) {
  return (
    <Card className="p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </Card>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <label className="grid gap-1 text-sm font-medium">{label}{children}</label>;
}

function adminVerificationLabel(status: string) {
  if (status === "ACTIVE_VERIFIED") return "Verified";
  if (status === "ARCHIVED") return "Archived";
  if (status === "NEEDS_REVIEW") return "Pending";
  return "Unverified";
}

function buttonLabel(action: string) {
  if (action === "unhighlight") return "Unhighlight";
  if (action === "unpin") return "Unpin";
  return action.replace(/^\w/, (letter) => letter.toUpperCase());
}

function statusClass(status: string) {
  if (status === "ACTIVE_VERIFIED") return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (status === "ARCHIVED") return "border-red-200 bg-red-50 text-red-800";
  return "border-orange-200 bg-orange-50 text-orange-900";
}

function trustClass(level: string) {
  if (level.includes("approved") || level.includes("Verified") || level.includes("created")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }
  if (level === "Archived" || level === "Hidden") return "border-red-200 bg-red-50 text-red-800";
  return "border-slate-200 bg-slate-50 text-slate-700";
}

function Th({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 font-semibold">{children}</th>;
}

function Td({ children }: { children: React.ReactNode }) {
  return <td className="max-w-xs px-4 py-3 text-muted-foreground">{children}</td>;
}
