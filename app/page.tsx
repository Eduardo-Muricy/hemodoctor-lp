import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { TeleHemato } from "./components/TeleHemato";
import { Solutions } from "./components/Solutions";
import { Benefits } from "./components/Benefits";
import { DemoForm } from "./components/DemoForm";
import { Media } from "./components/Media";
import { Blog } from "./components/Blog";
import { Team } from "./components/Team";
import { About } from "./components/About";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <Features />
      <HowItWorks />
      <TeleHemato />
      <Solutions />
      <Benefits />
      <DemoForm />
      <Media />
      <Blog />
      <Team />
      <About />
    </main>
  );
}
