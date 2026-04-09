"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAccess } from "@/components/access-provider";

const publicLinks = [
  { href: "/", label: "Accueil" },
  { href: "/programme", label: "Programme" },
  { href: "/faq", label: "FAQ" },
  { href: "/abonnement", label: "Abonnement" },
  { href: "/connexion", label: "Connexion" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { isSubscribed, hasAccount, isLoggedIn } = useAccess();
  const canSeeDashboard = isSubscribed && hasAccount && isLoggedIn;

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-950">
          AMFprep
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {publicLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition ${active ? "text-slate-950" : "text-slate-500 hover:text-slate-950"}`}
              >
                {item.label}
              </Link>
            );
          })}
          {canSeeDashboard ? (
            <Link
              href="/dashboard"
              className={`text-sm transition ${pathname === "/dashboard" ? "text-slate-950" : "text-slate-500 hover:text-slate-950"}`}
            >
              Dashboard
            </Link>
          ) : null}
        </nav>

        <div className="flex items-center gap-3">
          {canSeeDashboard ? (
            <Link
              href="/dashboard"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
            >
              Dashboard
            </Link>
          ) : null}
          <Link
            href={isSubscribed ? "/connexion" : "/abonnement"}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            {isSubscribed ? (hasAccount ? "Se connecter" : "Créer un compte") : "S’abonner"}
          </Link>
        </div>
      </div>
    </header>
  );
}
