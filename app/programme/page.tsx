"use client";

import { PageShell } from "@/components/page-shell";
import { Card, PrimaryLink, SecondaryLink } from "@/components/ui";
import { modules } from "@/lib/site-data";
import { useState } from "react";

export default function ProgrammePage() {
  const [selectedModule, setSelectedModule] = useState(modules[0]);
  return (
    <PageShell
      eyebrow="Programme"
      title="Un programme condensé, lisible et pensé pour réviser plus vite."
      description="Moins de pages, plus de clarté. Chaque module se consulte rapidement et le contenu important reste immédiatement visible."
      aside={
        <Card>
          <p className="text-sm text-slate-500">Navigation</p>
          <div className="mt-5 space-y-2">
            {modules.map((module) => (
              <button
                key={module.title}
                type="button"
                onClick={() => setSelectedModule(module)}
                className={`w-full rounded-2xl px-4 py-4 text-left text-sm transition ${
                  selectedModule.title === module.title
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                }`}
              >
                {module.title}
              </button>
            ))}
          </div>
        </Card>
      }
    >
      <Card>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm text-slate-500">Module sélectionné</p>
            <h2 className="mt-1 text-3xl font-semibold tracking-tight text-slate-950">
              {selectedModule.title}
            </h2>
          </div>
          <div className="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-700">
            Progression {selectedModule.progress}%
          </div>
        </div>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">{selectedModule.text}</p>
        <div className="mt-8 h-2 rounded-full bg-slate-200">
          <div
            className="h-2 rounded-full bg-slate-950 transition-all duration-500"
            style={{ width: `${selectedModule.progress}%` }}
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <PrimaryLink href="/abonnement">Accéder à ce module</PrimaryLink>
          <SecondaryLink href="/faq">Voir les questions fréquentes</SecondaryLink>
        </div>
      </Card>
    </PageShell>
  );
}
