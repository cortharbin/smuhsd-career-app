import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, Select, Textarea } from "@/components/ui/input";
import { submitOpportunity } from "./actions";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function SubmitPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const submitted = params.submitted === "1";

  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-normal">Submit an Opportunity</h1>
      <p className="mt-3 text-muted-foreground">
        Employers and counselors can submit a record for review. New submissions are
        saved as Pending review and should be checked by an admin before public launch.
      </p>

      {submitted && (
        <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-950">
          Thank you. The opportunity was submitted as Pending review.
        </div>
      )}

      <Card className="mt-6 p-5">
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
              <Input name="gradeRequirement" />
            </Field>
            <Field label="Paid/unpaid">
              <Select name="paid" defaultValue="unknown">
                <option value="unknown">Unknown</option>
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
              </Select>
            </Field>
            <Field label="Pay range if known">
              <Input name="compensationText" />
            </Field>
            <Field label="Deadline">
              <Input name="deadlineText" />
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
