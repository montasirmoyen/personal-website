import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — UniNext",
  description: "Privacy Policy for the UniNext mobile application.",
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">1.1 Information You Provide Directly</h3>
          <div className="space-y-4">
            <div>
              <p className="text-white/70 font-medium mb-2">Account Information <span className="text-white/40 text-sm font-normal">(optional)</span></p>
              <p className="text-white/60 text-sm mb-2">If you choose to create an account to enable cloud sync, we collect:</p>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
                <li>Email address</li>
                <li>Password (stored securely by Firebase Authentication — we never store your password in plain text)</li>
              </ul>
            </div>
            <div>
              <p className="text-white/70 font-medium mb-2">Academic Planning Data</p>
              <p className="text-white/60 text-sm mb-2">When you use the App, you may enter:</p>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
                <li>Degree profile: degree name, institution name, total credits required, minimum GPA target</li>
                <li>Courses: course code, title, credit hours, grade, completion status, term assignment, and requirement category</li>
                <li>Terms/Semesters: term name, year, semester type, and credit target</li>
                <li>Requirement categories: category name, required credits, and description</li>
              </ul>
              <p className="text-white/50 text-sm mt-3 italic">All of this data is self-reported by you. We do not connect to or retrieve data from any university, registrar, or academic institution.</p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">1.2 Information Collected Automatically</h3>
          <p className="text-white/60 text-sm mb-2">At this time, we do <span className="text-white font-medium">not</span> collect:</p>
          <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
            <li>Usage analytics or behavioral data</li>
            <li>Crash reports or diagnostic logs sent to third parties</li>
            <li>Device identifiers for advertising</li>
            <li>Location data</li>
            <li>Contacts or other device content</li>
          </ul>
          <p className="text-white/50 text-sm mt-3">We may collect basic technical information necessary to operate the service (e.g., Firebase infrastructure telemetry), but this is not used to identify or track individual users.</p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <div className="space-y-4">
        <div>
          <p className="text-white/60 text-sm mb-2">We use the information you provide solely to:</p>
          <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
            <li>Authenticate your account and allow you to sign in</li>
            <li>Store and sync your academic planning data across devices when you are signed in</li>
            <li>Restore your data when you reinstall the App or sign in on a new device</li>
            <li>Provide core App features such as GPA calculation and progress tracking</li>
          </ul>
        </div>
        <div>
          <p className="text-white/60 text-sm mb-2">We do <span className="text-white font-medium">not</span> use your information to:</p>
          <ul className="list-disc list-inside text-white/60 text-sm space-y-1 pl-2">
            <li>Serve advertisements</li>
            <li>Build behavioral profiles</li>
            <li>Sell or share your data with third parties for marketing purposes</li>
            <li>Train machine learning models</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "data-storage",
    title: "3. How Your Data Is Stored",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">3.1 Local Storage <span className="text-white/40 text-sm font-normal">(All Users)</span></h3>
          <p className="text-white/60 text-sm">All data you enter is saved locally on your device using AsyncStorage, a React Native local storage solution. This data remains on your device and is not transmitted to any server unless you sign in to an account. You can clear all local data at any time from the Settings screen.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">3.2 Cloud Storage <span className="text-white/40 text-sm font-normal">(Signed-In Users Only)</span></h3>
          <p className="text-white/60 text-sm mb-2">If you create an account and sign in, your data is synchronized to <span className="text-white font-medium">Google Firebase Firestore</span> — a cloud-hosted database service provided by Google LLC. Your data is stored under your unique user ID and is protected by Firebase security rules which restrict access to only your authenticated account.</p>
          <p className="text-white/60 text-sm">Your Firebase-stored data is subject to{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">Google&apos;s Privacy Policy</a>{" "}and{" "}
            <a href="https://firebase.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">Firebase&apos;s terms</a>.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">3.3 Offline-First Architecture</h3>
          <p className="text-white/60 text-sm">The App is designed to work offline. Data is always saved to your device first. Cloud sync occurs in the background when you are signed in and have an internet connection. If cloud sync fails, your local data remains intact.</p>
        </div>
      </div>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: (
      <div className="space-y-3">
        <p className="text-white/60 text-sm">We do <span className="text-white font-medium">not</span> sell, rent, or share your personal information with third parties, except in the following limited circumstances:</p>
        <ul className="space-y-3 text-sm">
          <li className="flex gap-3">
            <span className="text-blue-400 font-medium shrink-0">Service Providers</span>
            <span className="text-white/60">We use Google Firebase to provide authentication and cloud storage services. Firebase processes data on our behalf according to Google&apos;s data processing terms.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-medium shrink-0">Legal Requirements</span>
            <span className="text-white/60">We may disclose your information if required to do so by law, court order, or governmental authority.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-400 font-medium shrink-0">Protection of Rights</span>
            <span className="text-white/60">We may disclose information to protect the rights, property, or safety of us, our users, or the public.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-retention",
    title: "5. Data Retention",
    content: (
      <div className="space-y-3 text-white/60 text-sm">
        <p>Your data is retained for as long as your account is active or as needed to provide the App&apos;s services.</p>
        <ul className="space-y-2">
          <li><span className="text-white font-medium">Local data</span> remains on your device until you clear it from Settings or uninstall the App.</li>
          <li><span className="text-white font-medium">Cloud data</span> associated with your account is retained until you delete your account.</li>
        </ul>
        <p>When you delete your account from the Settings screen, your cloud data stored in Firebase Firestore is permanently deleted. We do not retain backups of individual user accounts after deletion.</p>
      </div>
    ),
  },
  {
    id: "your-rights",
    title: "6. Your Rights and Choices",
    content: (
      <div className="space-y-4 text-sm">
        {[
          { label: "Access", desc: "You can view all the data you have entered directly within the App." },
          { label: "Correction", desc: "You can edit or update any data you have entered at any time within the App." },
          { label: "Deletion", desc: "You can clear all locally stored data from the Settings screen at any time, and delete your account and all associated cloud data from Settings." },
          { label: "Export", desc: "At this time, the App does not offer a data export feature. All data you have entered is accessible and viewable within the App." },
          { label: "Opt-out of Cloud Sync", desc: "You may use the App in local-only mode without creating an account. In this case, no data is transmitted to any cloud service." },
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
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    content: (
      <p className="text-white/60 text-sm">The App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have inadvertently collected such information, we will delete the account and associated data promptly. If you believe a child under 13 has provided us with personal information, please contact us at the email address below.</p>
    ),
  },
  {
    id: "security",
    title: "8. Security",
    content: (
      <div className="space-y-3 text-sm">
        <p className="text-white/60">We take reasonable technical and organizational measures to protect your data:</p>
        <ul className="list-disc list-inside text-white/60 space-y-1 pl-2">
          <li>Passwords are never stored in plain text; Firebase Authentication handles credential security</li>
          <li>Cloud data in Firebase Firestore is protected by security rules that enforce per-user access control</li>
          <li>Data in transit between the App and Firebase is encrypted using TLS/HTTPS</li>
          <li>Local device storage is protected by the underlying iOS security and sandbox model</li>
        </ul>
        <p className="text-white/50 italic">No method of electronic storage or transmission is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
      </div>
    ),
  },
  {
    id: "third-party",
    title: "9. Third-Party Services",
    content: (
      <div className="space-y-4">
        <p className="text-white/60 text-sm">The App integrates with the following third-party services:</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left text-white/50 font-medium py-2 pr-4">Service</th>
                <th className="text-left text-white/50 font-medium py-2 pr-4">Provider</th>
                <th className="text-left text-white/50 font-medium py-2 pr-4">Purpose</th>
                <th className="text-left text-white/50 font-medium py-2">Privacy Policy</th>
              </tr>
            </thead>
            <tbody className="text-white/60">
              <tr className="border-b border-white/5">
                <td className="py-3 pr-4">Firebase Authentication</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">User account authentication</td>
                <td className="py-3">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">policies.google.com</a>
                </td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Cloud Firestore</td>
                <td className="py-3 pr-4">Google LLC</td>
                <td className="py-3 pr-4">Cloud data storage and sync</td>
                <td className="py-3">
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 transition-colors">policies.google.com</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-white/50 text-sm italic">We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.</p>
      </div>
    ),
  },
  {
    id: "ccpa",
    title: "10. California Privacy Rights (CCPA)",
    content: (
      <div className="space-y-3 text-sm text-white/60">
        <p>If you are a California resident, you have the right to:</p>
        <ul className="list-disc list-inside space-y-1 pl-2">
          <li>Know what personal information we collect and how it is used</li>
          <li>Request deletion of your personal information</li>
          <li>Opt out of the sale of your personal information (we do not sell personal information)</li>
          <li>Non-discrimination for exercising your privacy rights</li>
        </ul>
        <p>To exercise these rights, contact us at the email address below.</p>
      </div>
    ),
  },
  {
    id: "gdpr",
    title: "11. European Users (GDPR)",
    content: (
      <p className="text-white/60 text-sm">If you are located in the European Economic Area (EEA), you have rights under the General Data Protection Regulation (GDPR), including the right to access, correct, delete, restrict processing of, and port your personal data. Our legal basis for processing your data is your consent (by accepting these terms) and the performance of a contract (providing the App&apos;s services to you). To exercise your rights, contact us at the email address below.</p>
    ),
  },
  {
    id: "changes",
    title: "12. Changes to This Privacy Policy",
    content: (
      <p className="text-white/60 text-sm">We may update this Privacy Policy from time to time. When we do, we will update the &quot;Last Updated&quot; date at the top of this document. For material changes, we will provide notice within the App or via the email address associated with your account. Your continued use of the App after any changes constitutes your acceptance of the revised policy.</p>
    ),
  },
];

export default function UniNextPrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <div className="relative border-b border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
          <div className="flex items-center gap-5 mb-8">
            <div className="relative size-14 md:size-16 shrink-0">
              <Image
                src="/uninext.png"
                alt="UniNext"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-1">UniNext</p>
              <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <span>Last Updated: <span className="text-white/70">May 5, 2026</span></span>
            <span>Effective: <span className="text-white/70">May 5, 2026</span></span>
          </div>

          <p className="mt-6 text-white/60 max-w-2xl leading-relaxed">
            This Privacy Policy describes how UniNext collects, uses, stores, and protects your information
            when you use the UniNext mobile application. By using the App, you agree to the practices described
            in this policy.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Table of Contents</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="text-sm text-white/60 hover:text-white transition-colors py-1 flex items-center gap-2 group"
              >
                <span className="size-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors shrink-0" />
                {section.title}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm text-white/60 hover:text-white transition-colors py-1 flex items-center gap-2 group"
            >
              <span className="size-1.5 rounded-full bg-white/20 group-hover:bg-blue-400 transition-colors shrink-0" />
              13. Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-6 pb-10 space-y-2">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-6 md:p-8 scroll-mt-24"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">{section.title}</h2>
            <div>{section.content}</div>
          </section>
        ))}

        {/* Contact Section */}
        <section
          id="contact"
          className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-6 md:p-8 scroll-mt-24"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">13. Contact Us</h2>
          <p className="text-white/60 text-sm mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or your data, please contact us:
          </p>
          <a
            href="mailto:montasirmoyen@gmail.com"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            montasirmoyen@gmail.com
          </a>
        </section>
      </div>

      {/* Footer */}
      <div className="max-w-4xl mx-auto px-6 py-10 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <div className="flex items-center gap-3">
          <div className="relative size-7 shrink-0">
            <Image src="/uninext.png" alt="UniNext" fill className="rounded-lg object-cover" />
          </div>
          <span>© 2026 UniNext. All rights reserved.</span>
        </div>
        <Link href="/" className="hover:text-white/70 transition-colors">
          montasirmoyen.com
        </Link>
      </div>
    </div>
  );
}
