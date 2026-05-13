import { Metadata } from "next";
import PolicyPage, { type PolicySection } from "@/components/ui/policy-page";

export const metadata: Metadata = {
  title: "Terms of Use — UniNext",
  description: "Terms of Use for the UniNext mobile application.",
};

const sections: PolicySection[] = [
  {
    id: "acceptance",
    title: "1. Acceptance of Terms",
    content: (
      <p className="text-white/60 text-sm">By creating an account or using UniNext without an account, you acknowledge that you have read, understood, and agree to these Terms and our Privacy Policy. If you are using the App on behalf of a minor, you represent that you have the authority to accept these Terms on their behalf.</p>
    ),
  },
  {
    id: "description",
    title: "2. Description of the App",
    content: (
      <div className="space-y-4">
        <p className="text-white/60 text-sm">UniNext is a personal academic degree planning tool that helps university students:</p>
        <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
          <li>Set up and track degree requirements and categories</li>
          <li>Add and manage course records, statuses, and grades</li>
          <li>Organize courses into academic terms</li>
          <li>Calculate and monitor cumulative GPA</li>
          <li>Estimate progress toward graduation</li>
        </ul>
        <p className="text-white/50 text-sm italic">UniNext is a personal planning aid only. It is not affiliated with, endorsed by, or connected to any university, college, or educational institution. The App does not access any official academic records, registrar systems, or institutional databases. Information you enter is self-reported and manually maintained by you.</p>
      </div>
    ),
  },
  {
    id: "eligibility",
    title: "3. Eligibility",
    content: (
      <p className="text-white/60 text-sm">You must be at least 13 years of age to use this App. If you are under 18, you represent that a parent or legal guardian has reviewed and agreed to these Terms. We do not knowingly collect personal information from children under 13. If we become aware that a user is under 13, we will delete their account and associated data.</p>
    ),
  },
  {
    id: "accounts",
    title: "4. User Accounts",
    content: (
      <div className="space-y-4 text-sm">
        {[
          { label: "4.1 Registration", desc: "You may use the App without an account (local-only mode). To enable cloud sync and access your data across multiple devices, you must create an account using a valid email address and password." },
          { label: "4.2 Account Security", desc: "You are responsible for maintaining the confidentiality of your password and for all activity that occurs under your account. You agree to notify us immediately if you suspect unauthorized access. We are not liable for any loss or damage arising from your failure to protect your credentials." },
          { label: "4.3 Accurate Information", desc: "You agree to provide accurate, current, and complete information when creating your account. You are solely responsible for the accuracy of all academic data you enter into the App." },
          { label: "4.4 Account Deletion", desc: "You may delete your account and all associated data at any time from the Settings screen within the App." },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-4 items-start">
            <span className="bg-white/10 text-white/80 font-medium px-3 py-1 rounded-full text-xs shrink-0 mt-0.5">{label}</span>
            <p className="text-white/60">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "use-of-app",
    title: "5. Use of the App",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-white/70 font-medium text-sm mb-2">5.1 Permitted Use</p>
          <p className="text-white/60 text-sm">You may use the App solely for your personal, non-commercial academic planning purposes.</p>
        </div>
        <div>
          <p className="text-white/70 font-medium text-sm mb-2">5.2 Prohibited Conduct</p>
          <p className="text-white/60 text-sm mb-2">You agree not to:</p>
          <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
            <li>Use the App for any unlawful purpose or in violation of any applicable laws</li>
            <li>Attempt to gain unauthorized access to the App&apos;s infrastructure or another user&apos;s account</li>
            <li>Reverse engineer, decompile, or disassemble any part of the App</li>
            <li>Use automated tools (bots, scrapers, crawlers) to interact with the App</li>
            <li>Transmit any malicious code, viruses, or harmful content through the App</li>
            <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "6. Intellectual Property",
    content: (
      <p className="text-white/60 text-sm">The App, including its design, code, graphics, and content, is owned by us and protected by applicable intellectual property laws. These Terms do not grant you any right, title, or interest in the App beyond the limited license to use it as described herein. You retain ownership of all data you enter into the App.</p>
    ),
  },
  {
    id: "no-academic-advice",
    title: "7. No Academic Advice Disclaimer",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-white font-medium">UniNext is not a substitute for official academic advising.</p>
        <p className="text-white/60">The App is a personal organizational tool. Degree requirements, credit counts, GPA calculations, and graduation projections displayed in the App are based solely on the data you enter and do not constitute official academic records or advice. Always consult your institution&apos;s official academic advisor, registrar, or course catalog for authoritative degree information. We are not responsible for any academic decisions made based on information displayed in the App.</p>
      </div>
    ),
  },
  {
    id: "data-accuracy",
    title: "8. Data and Accuracy",
    content: (
      <p className="text-white/60 text-sm">You are solely responsible for the accuracy and completeness of data entered into the App. We do not verify, validate, or cross-check any course, grade, credit, or degree information against external sources. GPA calculations and progress estimates are mathematical computations based on your inputs and should not be relied upon for official purposes.</p>
    ),
  },
  {
    id: "third-party",
    title: "9. Third-Party Services",
    content: (
      <p className="text-white/60 text-sm">The App uses Firebase (provided by Google LLC) for user authentication and cloud data storage. Your use of the App is also subject to Google&apos;s Terms of Service and Firebase&apos;s applicable terms. We are not responsible for the practices of third-party service providers. Links to relevant Google policies are available at{" "}
        <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">firebase.google.com</a>.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "10. Disclaimers and Limitation of Liability",
    content: (
      <div className="space-y-4 text-sm">
        {[
          { label: "10.1 \"As Is\" Service", desc: "The App is provided on an \"as is\" and \"as available\" basis without warranties of any kind, express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement." },
          { label: "10.2 No Guarantee of Availability", desc: "We do not guarantee that the App will be available at all times, uninterrupted, or error-free. We reserve the right to modify, suspend, or discontinue the App at any time without notice." },
          { label: "10.3 Limitation of Liability", desc: "To the fullest extent permitted by applicable law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of data, loss of academic standing, or any damages resulting from your use or inability to use the App, even if we have been advised of the possibility of such damages." },
          { label: "10.4 Maximum Liability", desc: "Our total liability to you for any claim arising out of or relating to these Terms or the App shall not exceed the amount you paid us in the twelve months preceding the claim. Since the App is currently free, this amount is zero (except where prohibited by law)." },
        ].map(({ label, desc }) => (
          <div key={label} className="flex gap-4 items-start">
            <span className="bg-white/10 text-white/80 font-medium px-3 py-1 rounded-full text-xs shrink-0 mt-0.5 whitespace-nowrap">{label}</span>
            <p className="text-white/60">{desc}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "indemnification",
    title: "11. Indemnification",
    content: (
      <p className="text-white/60 text-sm">You agree to indemnify and hold harmless us and our affiliates, officers, agents, and partners from and against any claims, liabilities, damages, judgments, awards, losses, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to your violation of these Terms or your use of the App.</p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to These Terms",
    content: (
      <p className="text-white/60 text-sm">We may update these Terms from time to time. When we do, we will revise the &quot;Last Updated&quot; date at the top of this document. For material changes, we will provide notice within the App or by email. Your continued use of the App after any changes constitutes your acceptance of the revised Terms.</p>
    ),
  },
  {
    id: "termination",
    title: "13. Termination",
    content: (
      <p className="text-white/60 text-sm">We reserve the right to suspend or terminate your account and access to the App at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.</p>
    ),
  },
  {
    id: "governing-law",
    title: "14. Governing Law",
    content: (
      <p className="text-white/60 text-sm">These Terms shall be governed by and construed in accordance with the laws of the applicable jurisdiction, without regard to its conflict of law provisions. Any disputes shall be resolved in the courts of competent jurisdiction.</p>
    ),
  },
];

export default function UniNextTermsOfUse() {
  return (
    <PolicyPage
      title="Terms of Use"
      lastUpdated="May 5, 2026"
      effective="May 5, 2026"
      intro="Please read these Terms of Use carefully before using the UniNext mobile application. By downloading, installing, or using the App, you agree to be bound by these Terms. If you do not agree, do not use the App."
      sections={sections}
      contactEmail="uninextsupport@gmail.com"
      contactSectionNumber={15}
    />
  );
}
