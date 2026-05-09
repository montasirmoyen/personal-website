import Image from "next/image";
import Link from "next/link";

export interface PolicySection {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface PolicyPageProps {
  title: string;
  lastUpdated: string;
  effective: string;
  intro: string;
  sections: PolicySection[];
  contactEmail: string;
  contactSectionNumber: number;
}

export default function PolicyPage({
  title,
  lastUpdated,
  effective,
  intro,
  sections,
  contactEmail,
  contactSectionNumber,
}: PolicyPageProps) {
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
              <h1 className="text-3xl md:text-4xl font-bold text-white">{title}</h1>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-white/50">
            <span>Last Updated: <span className="text-white/70">{lastUpdated}</span></span>
            <span>Effective: <span className="text-white/70">{effective}</span></span>
          </div>

          <p className="mt-6 text-white/60 max-w-2xl leading-relaxed">{intro}</p>
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
              {contactSectionNumber}. Contact Us
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

        {/* Contact */}
        <section
          id="contact"
          className="rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-colors p-6 md:p-8 scroll-mt-24"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white mb-5">
            {contactSectionNumber}. Contact Us
          </h2>
          <p className="text-white/60 text-sm mb-4">
            If you have any questions, concerns, or requests regarding this {title} or your data, please contact us:
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm px-4 py-2.5 rounded-xl transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            {contactEmail}
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
