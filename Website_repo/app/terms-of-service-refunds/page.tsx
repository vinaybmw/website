import { Footer } from "@/components/site/footer";
import { LegalDocument } from "@/components/site/legal-document";
import { Navbar } from "@/components/site/navbar";

export default function TermsOfServiceRefundsPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />
      <LegalDocument filePath="content/legal/terms-of-service-refunds-v2.txt" title="Terms of Service & Refunds" />
      <Footer />
    </main>
  );
}
