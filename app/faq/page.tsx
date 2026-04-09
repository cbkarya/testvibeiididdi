import { PageShell } from "@/components/page-shell";
import { Card, PrimaryLink, SecondaryLink } from "@/components/ui";
import { faqs } from "@/lib/site-data";

export default function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title="Les réponses importantes, sans détour."
      description="Une structure volontairement courte pour garder une lecture rapide et fluide."
      aside={
        <Card>
          <p className="text-sm text-slate-500">Accès rapide</p>
          <div className="mt-6 space-y-3">
            <PrimaryLink href="/abonnement">S’abonner</PrimaryLink>
            <SecondaryLink href="/connexion">Se connecter</SecondaryLink>
          </div>
        </Card>
      }
    >
      <div className="space-y-4">
        {faqs.map((item) => (
          <Card key={item.q} className="rounded-[1.75rem]">
            <h3 className="text-lg font-medium text-slate-950">{item.q}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
