import React from "react";
import DetailsCard from "../../components/details-card";
import Background from "../../components/background";

export default function EducationPage() {
  return (
    <Background backgroundImage="/background.jpg">

      <h1 className="text-xl font-bold mt-4">Education</h1>
      <hr
        className="mt-4"
        style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }}
      />
      <DetailsCard
        logoSrc="/su.png"
        alt="Suffolk University logo"
        title="Suffolk University"
        subtitle="Bachelor of Science — Computer Science"
        location="Boston, MA"
        dateRange="Sep 2023 — May 2027"
        bullets={[
          "Activities and societies: Computer Science Club, Computational Science and Mathematics Club",
          "Relevant Coursework: Data Structures & Algorithms, Object Oriented Programming, Architecture of Computer Systems",
        ]}
        website="https://www.suffolk.edu"
      />

      <DetailsCard
        logoSrc="/mhs.png"
        alt="Medford High School logo"
        title="Medford High School"
        subtitle="High School Diploma"
        location="Medford, MA"
        dateRange="Sep 2019 — May 2023"
        bullets={[
          "Activities and societies: Programming & Web Development, Computer Science Club",
          "Relevant Coursework: AP Computer Science Principles, AP Computer Science A (Java), CMU CS Academy (Python)",
        ]}
        website="https://mhs-mvths.mps02155.org/"
      />

      <br className="mb-5"></br>
    </Background>
  );
}