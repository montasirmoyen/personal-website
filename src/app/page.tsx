import Background from "../components/background";
import { Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <Background backgroundImage="/background.jpg">
      <div className="flex items-center gap-2">
        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5" />
        <h1 className="text-lg sm:text-xl font-bold">Hi there, I&apos;m Montasir.</h1>
      </div>
      <hr
        className="mt-4"
        style={{ borderColor: "white", borderWidth: "1px", borderStyle: "solid" }}
      />
      <div className="text-sm sm:text-md font-medium">
        <p className="mt-3 sm:mt-4">I also go by Monty, I&apos;m a full-stack software developer currently studying Computer Science at Suffolk University in Boston, Massachusetts.</p>
        <p className="mt-3 sm:mt-4">My fascination with technology began in middle school, when I got my very first computer from my parents.</p> 
        <p className="mt-3 sm:mt-4">
            Nowadays, I spend a lot of time learning and building things like websites, video games, macOS tools, and mobile apps.
            Most of my projects are inspired by personal interests and a curiosity to dive deeper into the technologies behind them.
        </p>
        <p className="mt-3 sm:mt-4">
            Above all, I&apos;m always looking for ways to learn, grow, and improve my skills further.
            Feel free to explore my site and learn more about myself!
        </p>
        <p className="mt-3 sm:mt-4">If you would like to reach out to me, my emails are always available:</p>
        <p className="text-blue-400 underline text-sm sm:text-base break-all">rmm05890@su.suffolk.edu</p>
        <p className="text-blue-400 underline text-sm sm:text-base break-all">montasirmoyen@gmail.com</p>
      </div>
    </Background>
  );
}