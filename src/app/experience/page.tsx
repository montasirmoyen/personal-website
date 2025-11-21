import React from "react";
import DetailsCard from "../../components/details-card";
import Background from "../../components/background";
import { Briefcase } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montasir Moyen | Experience",
  description: "Experience and internships of Montasir Moyen.",
};
export default function ExperiencePage() {
  return (
    <Background backgroundImage="/background.jpg">
      <>
        <div className="flex items-center gap-2">
          <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
          <h1 className="text-lg sm:text-xl font-bold">Experience</h1>
        </div>
        <hr
          className="mt-4"
          style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}
        />

        <DetailsCard
          logoSrc="/cx.png"
          alt="CollegiateX logo"
          title="CollegiateX"
          subtitle="Software Engineering Intern"
          location="Boston, MA"
          dateRange="Sep 2025 — Dec 2025"
          bullets={[
            "Developed the mobile app version of their platform used by notable NCAA D1, D2 & D3 athletes and large enterprises alike",
          ]}
          buttons={{
            "Visit Website": "https://collegiatex.com/",
          }}
        />
      </>
    </Background>
  );
}
