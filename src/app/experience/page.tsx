import React from "react";
import DetailsCard from "../../components/details-card";
import Background from "../../components/background";

export default function ExperiencePage() {
  return (
    <Background backgroundImage="/background.jpg">
      <>
        <h1 className="text-xl font-bold mt-4">Experience</h1>
        <hr
          className="mt-4"
          style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }}
        />

        <DetailsCard
          logoSrc="/cx.png"
          alt="CollegiateX logo"
          title="CollegiateX"
          subtitle="Software Engineering Intern"
          location="Boston, MA"
          dateRange="Sep 2025 — Dec 2025"
          bullets={[
            "Developed the iOS app version of their website which will be used by notable D1, D2 & D3 athletes from all over the United States and large businesses alike",
          ]}
          website="https://collegiatex.com/"
        />
      </>
    </Background>
  );
}
