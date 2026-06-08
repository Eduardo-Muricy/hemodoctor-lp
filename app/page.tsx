import { LanguageProvider } from "./lib/i18n";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { TeleHemato } from "./components/TeleHemato";

export default function Home() {
  return (
    <LanguageProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <TeleHemato />
      </main>
    </LanguageProvider>
  );
}
