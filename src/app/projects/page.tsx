import React from "react";
import DetailsCard from "../../components/details-card";
import Background from "../../components/background";
export default function ProjectPage() {
  return (
    <Background backgroundImage="/background.jpg">
    <>
      <h1 className="text-lg sm:text-xl font-bold">Projects</h1>
      <hr
        className="mt-4"
        style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}
      />

      <DetailsCard
        logoSrc="/github.png"
        alt="Fragrance Catalog logo"
        title="Fragrance Catalog"
        subtitle="Front-End Web Development"
        dateRange="Sep 2025 — Present"
        location="WIP — Pending Bug Fixes"
        bullets={[
          "Developed a website to browse and filter fragrances by 25+ notes, the most luxurious brands and seasons.",
          "Welcoming community contributions, especially to expand the curated fragrance dataset.",
        ]}
        website="https://fragrance-catalog.vercel.app/"
        buttonText="Visit Website"
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
        website="https://www.roblox.com/games/13436905139/MPS-4-a-side"
        buttonText="View Game"
      />

      <DetailsCard
        logoSrc="/github.png"
        alt="E-Com logo"
        title="E-Com"
        subtitle="Full-Stack Web Development"
        dateRange="Oct 2025 — Present"
        location="WIP — Pending Deployment"
        bullets={[
          "Built a full-stack e-commerce platform featuring product browsing, cart management, and secure checkout.",
          "Integrated Stripe for real-time payment processing with fraud prevention and user authentication with Auth0.",
          "Designed a MongoDB schema to persist user data, orders, and cart items.",
        ]}
        website="https://github.com/montasirmoyen/e-com"
        buttonText="View Repository"
      />

      <DetailsCard
        logoSrc="/github.png"
        alt="Crypto App logo"
        title="Crypto App"
        subtitle="iOS Development"
        dateRange="Oct 2025 — Present"
        location="WIP — Pending Deployment"
        bullets={[
          "Developed an iOS app for smooth browsing and analysis of crypto data, the demo has 100+ cryptocurrencies.",
          "Supports live statistics for research into 5+ valuable factors such as market cap, total supply and 7d% price change.",
        ]}
        website="https://github.com/montasirmoyen/crypto-app"
        buttonText="View Repository"
      />
    </>
    </Background>
  );
}