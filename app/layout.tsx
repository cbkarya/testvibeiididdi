import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AccessProvider } from "@/components/access-provider";

export const metadata: Metadata = {
  title: "AMFprep",
  description: "Préparation AMF simple, sobre et centrée sur l’essentiel.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <AccessProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </AccessProvider>
      </body>
    </html>
  );
}
