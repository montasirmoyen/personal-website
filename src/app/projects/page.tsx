import React from "react";
import DetailsCard from "../../components/details-card";
import Background from "../../components/background";
import { Hammer } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montasir Moyen | Projects",
  description: "A showcase of projects created by Montasir Moyen.",
};

export default function ProjectPage() {
  return (
    <Background backgroundImage="/background.jpg">
      <>
        <div className="flex items-center gap-2">
          <Hammer className="w-4 h-4 sm:w-5 sm:h-5" />
          <h1 className="text-lg sm:text-xl font-bold">Projects</h1>
        </div>

        <DetailsCard
          logoSrc="/lx.png"
          alt="Luxury Transport logo"
          title="Luxury Transport"
          subtitle="Full-Stack Web Development"
          dateRange="Nov 2025 — Present"
          bullets={[
            "Reserve luxury transportation services within the Greater Boston Area, and modify/cancel reservations with ease.",
            "Select from a fleet of luxury vehicles from minivans, SUVs, and sedans.",
            "Supports payment methods including card, PayPal and Venmo.",
          ]}
          buttons={{
            "Visit Website": "https://luxury-transport.vercel.app",
            "View Source Code": "https://github.com/montasirmoyen/luxury-transport"
          }}
          languages={["React", "TypeScript", "Firebase"]}
        />

        <DetailsCard
          logoSrc="/mps.png"
          alt="MPS logo"
          title="MPS"
          subtitle="Game Development"
          dateRange="Aug 2021 — Dec 2023"
          bullets={[
            "Achieved over 3,500+ concurrent players and 500,000+ monthly active players.",
            "Founded the growing parent company, gaining 160,000+ official members and producing more successful spin-offs of the game.",
            "Generated over 6 figures in net revenue while still maintaining a generous passive income thanks to various methods of monetization and social media influencer partner deals.",
          ]}
          buttons={{
            "View Game": "https://www.roblox.com/games/13436905139/MPS-4-a-side",
          }}
          languages={["Lua", "JavaScript", "RBLX Studio", "TailwindCSS"]}
        />

        <DetailsCard
          logoSrc="/github.png"
          alt="GitHub logo"
          title="Fragrance Catalog"
          subtitle="Front-End Web Development"
          dateRange="Sep 2025 — Present"
          location="Work In Progress"
          bullets={[
            "Browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
            "Welcoming community contributions, especially to expand the curated fragrance dataset.",
          ]}
          buttons={{
            "Visit Website": "https://fragrance-catalog.vercel.app/",
            "View Source Code": "https://github.com/montasirmoyen/fragrance-catalog"
          }}
          languages={["React", "TypeScript", "JavaScript"]}
        />

        <DetailsCard
          logoSrc="/github.png"
          alt="GitHub logo"
          title="Enhanceme"
          subtitle="Full-Stack Web Development"
          dateRange="Sep 2025 — Present"
          location="Work In Progress"
          bullets={[
            "Enhances and strengthens resumes, providing tailored suggestions for improvement.",
            "Fine-tuned AI model to act as a resume expert and analyze resume content more effectively.",
            "Complies with Applicant Tracking System (ATS) standards to increase interview chances.",
          ]}
          buttons={{
            "Visit Website": "https://enhanceme.vercel.app/",
            "View Source Code": "https://github.com/montasirmoyen/enhanceme"
          }}
          languages={["React", "TypeScript", "Node.js", "MongoDB"]}
        />
      </>
    </Background>
  );
}