"use client";

import Link from "next/link";
import { useAccess } from "@/components/access-provider";

export function SiteFooter() {
  const { isSubscribed, hasAccount, isLoggedIn } = useAccess();
  const canSeeDashboard = isSubscribed && hasAccount && isLoggedIn;

  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
        <p>AMFprep — sobre, simple, centré sur l’essentiel.</p>
        <div className="flex flex-wrap gap-4">
          <Link href="/programme" className="hover:text-slate-900">Programme</Link>
          <Link href="/faq" className="hover:text-slate-900">FAQ</Link>
          <Link href="/abonnement" className="hover:text-slate-900">Abonnement</Link>
          <Link href="/connexion" className="hover:text-slate-900">Connexion</Link>
          {canSeeDashboard ? <Link href="/dashboard" className="hover:text-slate-900">Dashboard</Link> : null}
        </div>
      </div>
    </footer>
  );
}
