import { Footer } from "@/components/site/footer";
import { LegalDocument } from "@/components/site/legal-document";
import { Navbar } from "@/components/site/navbar";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-bodiqo-charcoal">
      <Navbar />
      <LegalDocument filePath="content/legal/privacy-policy.txt" title="Privacy Policy" />
      <Footer />
    </main>
  );
}
