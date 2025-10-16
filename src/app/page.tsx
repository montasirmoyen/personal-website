import PageTemplate from "../components/page-template";

export default function Home() {
  return (
    <PageTemplate backgroundImage="/background.jpg">
      <p className="text-md mt-5">Hi there!</p>
      <p className="text-md mt-5">I&apos;m Montasir Moyen, a full-stack software developer currently studying Computer Science at Suffolk University in Boston, Massachusetts.</p>
      <p className="text-md mt-5">I&apos;ve worked on various projects that range from websites, video games and iOS applications. Some of my most recent projects were based off my interests as I continued learning more about the respective technologies they required.</p>
      <p className="text-md mt-5">If you would like to reach out to me, my email is always available.</p>
    </PageTemplate>
  );
}