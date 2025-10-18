import Background from "../components/background";

export default function Home() {
  return (
    <Background backgroundImage="/background.jpg">
      <h1 className="text-xl font-bold mt-4">Hi there!</h1>
        <hr
          className="mt-4"
          style={{ borderColor: "gray", borderWidth: "1px", borderStyle: "solid" }}
        />
      <div className="text-md font-semibold">
        <p className="mt-5">I&apos;m Montasir Moyen, a full-stack software developer currently studying Computer Science at Suffolk University in Boston, Massachusetts.</p>
        <p className="mt-5">I&apos;ve worked on various projects that range from websites, video games and iOS applications. Some of my most recent projects were based off my interests as I continued learning more about the respective technologies they required.</p>
        <p className="mt-5">If you would like to reach out to me, my email is always available: rmm05890@su.suffolk.edu</p>
      </div>
    </Background>
  );
}