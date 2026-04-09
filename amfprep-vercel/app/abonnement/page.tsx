"use client";

import { PageShell } from "@/components/page-shell";
import { Card, SecondaryLink } from "@/components/ui";
import { useAccess } from "@/components/access-provider";
import { useRouter } from "next/navigation";

export default function SubscriptionPage() {
  const { subscribe } = useAccess();
  const router = useRouter();

  return (
    <PageShell
      eyebrow="Abonnement"
      title="Commence par l’accès."
      description="Le fonctionnement est simple : tu t’abonnes, puis tu peux créer ton compte. Sans abonnement actif, l’inscription reste verrouillée."
      aside={
        <Card className="bg-slate-950 text-white shadow-[0_20px_80px_rgba(15,23,42,0.12)]">
          <p className="text-sm text-white/70">Offre AMFprep</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-5xl font-semibold tracking-tight">6,99 €</span>
            <span className="pb-2 text-sm text-white/70">/ semaine</span>
          </div>
          <div className="mt-8 space-y-3 text-sm text-white/85">
            <p>• Création de compte débloquée</p>
            <p>• Accès au dashboard</p>
            <p>• Suivi des modules et scores</p>
            <p>• Expérience simple et sans distraction</p>
          </div>
        </Card>
      }
    >
      <div className="max-w-2xl">
        <Card>
          <p className="text-sm text-slate-500">Paiement</p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-950">Activer l’abonnement</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Nom sur la carte"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
            />
            <input
              type="text"
              placeholder="Numéro de carte"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
            />
            <input
              type="text"
              placeholder="MM / AA"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
            />
            <input
              type="text"
              placeholder="CVC"
              className="rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950"
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => {
                subscribe();
                router.push("/connexion");
              }}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
            >
              Payer 6,99 € / semaine
            </button>
            <SecondaryLink href="/programme">Retour</SecondaryLink>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Démo visuelle : ici l’abonnement active l’accès et débloque ensuite la création de compte.
          </p>
        </Card>
      </div>
    </PageShell>
  );
}
