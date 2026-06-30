import { BriefcaseBusiness, GraduationCap, HandHeart, Search, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { getOrganizationCount, getOpportunities } from "@/lib/data";

const quickLinks = [
  { href: "/opportunities?type=JOB", label: "Jobs", icon: BriefcaseBusiness },
  { href: "/opportunities?type=INTERNSHIP", label: "Internships", icon: Search },
  { href: "/opportunities?type=VOLUNTEER", label: "Volunteering", icon: HandHeart },
  { href: "/opportunities?type=PROGRAM", label: "Programs", icon: GraduationCap },
  { href: "/work-permits", label: "Work Permits", icon: ShieldCheck }
];

export default async function HomePage() {
  const opportunities = await getOpportunities();

  return (
    <div className="page-enter mx-auto max-w-6xl px-4 py-10">
      <section className="section-enter grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
        <div className="section-enter">
          <p className="mb-3 text-sm font-semibold uppercase text-primary">
            San Mateo Union High School District
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-normal sm:text-5xl">
            Find real career opportunities from counselor source data.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Browse jobs, internships, volunteer roles, training pathways, and student
            resources in one searchable place. Every record keeps its source and
            verification status visible.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href="/opportunities">Browse opportunities</ButtonLink>
            <ButtonLink href="/submit" className="bg-foreground text-white">
              Submit an opportunity
            </ButtonLink>
          </div>
        </div>
        <Card className="section-enter p-5">
          <div className="grid grid-cols-2 gap-4">
            <Stat label="Opportunity records" value={opportunities.length.toString()} />
            <Stat label="Organizations" value={getOrganizationCount().toString()} />
            <Stat
              label="Need verification"
              value={opportunities
                .filter((item) => item.verificationStatus !== "ACTIVE_VERIFIED")
                .length.toString()}
            />
            <Stat
              label="Work permit reminders"
              value={opportunities.filter((item) => item.workPermitLikely).length.toString()}
            />
          </div>
        </Card>
      </section>

      <section className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {quickLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${index * 45}ms` }}
              className="section-enter card-lift rounded-lg border bg-white p-4 transition-colors hover:border-primary hover:text-teal-900"
            >
              <Icon className="mb-3 h-5 w-5 text-primary" aria-hidden="true" />
              <span className="font-medium">{item.label}</span>
            </a>
          );
        })}
      </section>

      <section className="section-enter mt-10 rounded-lg border bg-white p-5 text-sm text-muted-foreground shadow-sm">
        Opportunities listed here are informational leads from school and public
        source data. Inclusion does not mean SMUHSD endorses or recommends an
        employer, program, or opportunity. Students should verify details, talk
        with a parent or guardian when appropriate, and check with their school
        College & Career Center before starting paid work.
      </section>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-muted p-4 transition-colors hover:bg-teal-50">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
