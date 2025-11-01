import Background from "../components/background";
import { Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <Background backgroundImage="/background.jpg">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-5 h-5" />
        <h1 className="text-xl font-bold"> Hi there, I&apos;m Montasir. Welcome to my website!</h1>
      </div>
      <hr
        className="mt-4"
        style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}
      />
      <div className="text-md font-medium">
        <p className="mt-5">I also go by Monty, I&apos;m a full-stack software developer currently studying Computer Science at Suffolk University in Boston, Massachusetts.</p>
        <p className="mt-5">I&apos;ve worked on various projects that range from websites, video games and macOS, iOS & Android applications.
          Most of my projects were based off my interests as I continued learning more about the respective technologies they required.</p>
        <p className="mt-5">But above all, I&apos;m always trying to learn and be diverse with my work.
          Feel free to explore my website to learn more about myself!</p>
        <p className="mt-5">If you would like to reach out to me, my emails are always available:</p>
        <p className="text-blue-400 underline">rmm05890@su.suffolk.edu</p>
        <p className="text-blue-400 underline">montasirmoyen@gmail.com</p>
      </div>
    </Background>
  );
}