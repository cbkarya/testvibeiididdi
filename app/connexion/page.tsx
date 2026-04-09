"use client";

import { PageShell } from "@/components/page-shell";
import { Card } from "@/components/ui";
import { useAccess } from "@/components/access-provider";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { isSubscribed, hasAccount, createAccount, login } = useAccess();
  const router = useRouter();

  return (
    <PageShell
      eyebrow="Connexion"
      title={isSubscribed ? "Créer un compte ou te connecter." : "L’accès est réservé aux abonnés."}
      description={
        isSubscribed
          ? "Une fois l’abonnement activé, tu peux créer ton compte puis accéder à ton dashboard."
          : "Tu dois d’abord souscrire à l’abonnement de 6,99 € par semaine pour débloquer l’inscription."
      }
      aside={
        <Card>
          <p className="text-sm text-slate-500">Statut</p>
          <div className="mt-5 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 text-sm">
              <span>Abonnement</span>
              <span className={isSubscribed ? "text-emerald-600" : "text-slate-500"}>
                {isSubscribed ? "Actif" : "Inactif"}
              </span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-4 text-sm">
              <span>Compte</span>
              <span className={hasAccount ? "text-emerald-600" : "text-slate-500"}>
                {hasAccount ? "Créé" : "Verrouillé"}
              </span>
            </div>
          </div>
        </Card>
      }
    >
      <div className="grid gap-5 lg:grid-cols-2">
        <Card>
          <p className="text-sm text-slate-500">Créer un compte</p>
          <div className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Nom complet"
              disabled={!isSubscribed}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950 disabled:bg-slate-100"
            />
            <input
              type="email"
              placeholder="Adresse email"
              disabled={!isSubscribed}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950 disabled:bg-slate-100"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              disabled={!isSubscribed}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950 disabled:bg-slate-100"
            />
            <button
              type="button"
              disabled={!isSubscribed}
              onClick={() => {
                createAccount();
                router.push("/dashboard");
              }}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Créer mon compte
            </button>
          </div>
        </Card>

        <Card>
          <p className="text-sm text-slate-500">Se connecter</p>
          <div className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Adresse email"
              disabled={!hasAccount}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950 disabled:bg-slate-100"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              disabled={!hasAccount}
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-slate-950 disabled:bg-slate-100"
            />
            <button
              type="button"
              disabled={!hasAccount}
              onClick={() => {
                login();
                router.push("/dashboard");
              }}
              className="rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Accéder au dashboard
            </button>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}
