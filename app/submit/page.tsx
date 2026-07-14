import { Send, Sparkles } from "lucide-react";
import { AgeGradeFields } from "@/components/age-grade-fields";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/input";
import { submitOpportunity } from "./actions";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function SubmitPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const submitted = params.submitted === "1";
  const error = params.error;

  return (
    <div className="page-enter mx-auto max-w-4xl px-4 py-8">
      <div className="page-kicker">
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Employer and counselor intake
      </div>
      <h1 className="page-title mt-2 text-3xl font-semibold sm:text-4xl">Submit an Opportunity</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Employers and counselors can submit a record for review. New submissions are
        saved as Pending review and should be checked by an admin before public launch.
      </p>

      {submitted && (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          Thank you. The opportunity was submitted as Pending review.
        </div>
      )}
      {error === "validation" && (
        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          Please check the required fields and submit the opportunity again.
        </div>
      )}
      {error === "database" && (
        <div className="mt-6 rounded-lg border border-orange-200 bg-orange-50 p-4 text-sm text-orange-900">
          Submissions need a configured database before they can be saved.
        </div>
      )}

      <Card className="section-enter mt-6 p-5 sm:p-6">
        <form action={submitOpportunity} className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Organization">
              <Input name="organizationName" required />
            </Field>
            <Field label="Opportunity title">
              <Input name="title" required />
            </Field>
            <Field label="Type">
              <Select name="type" defaultValue="INTERNSHIP" required>
                <option value="JOB">Job</option>
                <option value="INTERNSHIP">Internship</option>
                <option value="PROGRAM">Program</option>
                <option value="VOLUNTEER">Volunteer</option>
                <option value="EVENT">Event</option>
                <option value="TRAINING_PATHWAY">Career pathway</option>
                <option value="STUDENT_RESOURCE">Student resource</option>
              </Select>
            </Field>
            <Field label="Location">
              <Input name="locationText" />
            </Field>
            <Field label="Age/grade requirement">
              <AgeGradeFields />
            </Field>
            <Field label="Paid/unpaid">
              <Select name="paid" defaultValue="unknown">
                <option value="unknown">Unknown</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </Select>
            </Field>
            <Field label="Minimum pay">
              <Input name="payMin" inputMode="decimal" placeholder="15.50" />
            </Field>
            <Field label="Maximum pay">
              <Input name="payMax" inputMode="decimal" placeholder="20.00" />
            </Field>
            <Field label="Deadline">
              <Input name="deadlineText" placeholder="Jan 15, 2026" />
            </Field>
            <Field label="Application link/contact">
              <Input name="applyUrl" />
            </Field>
            <Field label="Submitter name">
              <Input name="contactName" />
            </Field>
            <Field label="Submitter email">
              <Input name="contactEmail" type="email" required />
            </Field>
            <Field label="Extra contact details">
              <Input name="contactText" />
            </Field>
          </div>
          <Field label="Description">
            <Textarea name="description" required />
          </Field>
          <Button type="submit" className="gap-2 sm:w-fit">
            <Send className="h-4 w-4" aria-hidden="true" />
            Submit for review
          </Button>
        </form>
      </Card>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1 text-sm font-medium">
      {label}
      {children}
    </label>
  );
}
