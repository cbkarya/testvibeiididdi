"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccess } from "@/components/access-provider";
import { Card } from "@/components/ui";
import { modules } from "@/lib/site-data";
import { useState } from "react";

export function GuardedDashboard() {
  const { isSubscribed, hasAccount, isLoggedIn, logout } = useAccess();
  const router = useRouter();
  const [selectedModule, setSelectedModule] = useState(modules[0].title);

  if (!isSubscribed || !hasAccount || !isLoggedIn) {
    if (typeof window !== "undefined") {
      router.replace("/connexion");
    }
    return (
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Card>
          <p className="text-lg font-medium text-slate-950">Redirection en cours…</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Le dashboard est réservé aux utilisateurs abonnés et connectés.
          </p>
          <div className="mt-6">
            <Link
              href="/connexion"
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Aller à la connexion
            </Link>
          </div>
        </Card>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
      <div className="grid gap-5 lg:grid-cols-3">
        <Card>
          <p className="text-sm text-slate-500">Progression totale</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">68%</p>
          <div className="mt-5 h-2 rounded-full bg-slate-200">
            <div className="h-2 w-2/3 rounded-full bg-slate-950" />
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Dernier score</p>
          <p className="mt-3 text-4xl font-semibold tracking-tight text-slate-950">82 / 100</p>
          <p className="mt-3 text-sm text-slate-600">Bon niveau d’ensemble. Renforcer la conformité.</p>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Compte</p>
          <p className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Accès actif</p>
          <p className="mt-3 text-sm text-slate-600">Ton espace membre est bien ouvert.</p>
          <button
            type="button"
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="mt-6 rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
          >
            Se déconnecter
          </button>
        </Card>

        <div className="lg:col-span-3">
          <Card>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-sm text-slate-500">Modules</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">Suivi interactif</h2>
              </div>
              <Link
                href="/programme"
                className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-50"
              >
                Voir le programme
              </Link>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {modules.map((module) => {
                const active = selectedModule === module.title;
                return (
                  <button
                    key={module.title}
                    type="button"
                    onClick={() => setSelectedModule(module.title)}
                    className={`rounded-[1.5rem] border p-5 text-left transition ${
                      active
                        ? "border-slate-950 bg-slate-950 text-white"
                        : "border-slate-200 bg-slate-50 text-slate-900 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-base font-medium">{module.title}</span>
                      <span className={`text-sm ${active ? "text-white/80" : "text-slate-500"}`}>
                        {module.progress}%
                      </span>
                    </div>
                    <p className={`mt-3 text-sm leading-6 ${active ? "text-white/80" : "text-slate-600"}`}>
                      {module.text}
                    </p>
                  </button>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
