import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://damas-auto-repair.pages.dev"),
  title: "Damas Auto Repair | Chantilly, VA",
  description:
    "Local auto repair, diagnostics, maintenance, brakes, exhaust repair, tune ups, timing chain and belt service, and tire care at 25358 Pleasant Valley Rd #120, Chantilly, VA 20152.",
  openGraph: {
    title: "Damas Auto Repair | Chantilly, VA",
    description:
      "Local auto repair, diagnostics, maintenance, brakes, exhaust repair, tune ups, timing chain and belt service, and tire care in Chantilly, VA.",
    url: "https://damas-auto-repair.pages.dev",
    siteName: "Damas Auto Repair",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Damas Auto Repair in Chantilly, VA",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Damas Auto Repair | Chantilly, VA",
    description:
      "Local auto repair, diagnostics, maintenance, brakes, exhaust repair, tune ups, timing chain and belt service, and tire care in Chantilly, VA.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
