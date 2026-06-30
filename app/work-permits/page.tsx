import { CheckCircle2, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { getVerifiedResources, getWorkPermitInfo } from "@/lib/data";

export default function WorkPermitsPage() {
  const info = getWorkPermitInfo();
  const resources = getVerifiedResources().filter((resource) =>
    info.sources.includes(resource.id)
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-3xl font-semibold tracking-normal">Work Permit Help</h1>
      <p className="mt-3 max-w-3xl text-muted-foreground">{info.summary}</p>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Card className="p-5">
          <h2 className="text-lg font-semibold">What students usually need to do</h2>
          <ol className="mt-4 grid gap-3">
            {info.student_steps.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card className="p-5">
          <h2 className="text-lg font-semibold">Important notes</h2>
          <ul className="mt-4 grid gap-3">
            {info.important_notes.map((note) => (
              <li key={note} className="flex gap-3 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Verified source resources</h2>
        <div className="mt-4 grid gap-3">
          {resources.map((resource) => (
            <a
              key={resource.id}
              href={resource.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-start justify-between gap-4 rounded-lg border bg-white p-4 hover:border-primary"
            >
              <span>
                <span className="font-medium">{resource.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{resource.summary}</span>
              </span>
              <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
