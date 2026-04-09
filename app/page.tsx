import { PrimaryLink, SecondaryLink, Card } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-16 sm:pt-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-xs text-slate-600 shadow-sm">
            Préparation AMF • Interface sobre • Accès par abonnement
          </div>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Préparer l’AMF avec une expérience simple, nette et directe.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AMFprep va à l’essentiel : un programme clair, un abonnement unique à 6,99 € par semaine,
            puis un espace membre accessible uniquement après paiement et connexion.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <PrimaryLink href="/abonnement">S’abonner</PrimaryLink>
            <SecondaryLink href="/programme">Voir le programme</SecondaryLink>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <Card>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">Accès</p>
                <h2 className="mt-1 text-2xl font-semibold text-slate-950">Une seule formule</h2>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">Simple</div>
            </div>
            <div className="mt-8 flex items-end gap-2">
              <span className="text-5xl font-semibold tracking-tight text-slate-950">6,99 €</span>
              <span className="pb-2 text-sm text-slate-500">/ semaine</span>
            </div>
            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">
              L’abonnement active la création de compte. Une fois connecté, l’utilisateur accède à son dashboard
              privé et à ses fonctionnalités de révision.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Création de compte débloquée", "Connexion membre", "Modules et progression", "Expérience mobile et desktop"].map((item) => (
                <div key={item} className="rounded-2xl bg-slate-50 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)]">
            <p className="text-sm text-slate-500">Parcours</p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-950">Simple en 3 étapes</h2>
            <div className="mt-8 space-y-4">
              {[
                ["1", "Souscrire à l’abonnement"],
                ["2", "Créer son compte"],
                ["3", "Se connecter à son espace"],
              ].map(([step, text]) => (
                <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white">
                      {step}
                    </div>
                    <p className="text-sm font-medium text-slate-900">{text}</p>
                  </div>
                </div>
              ))}
              <SecondaryLink href="/abonnement">Commencer maintenant</SecondaryLink>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
