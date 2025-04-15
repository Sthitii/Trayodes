import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import InsightsSection from "@/components/home/Insights";
import { metadata } from "./page-metadata";
import JsonLd from "@/components/JsonLd";

export { metadata };

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Trayodes",
    url: "https://www.trayodes.com",
    // Add more properties as needed
  };

  return (
    <>
      <JsonLd data={jsonLdData} />
      <main>
        <Hero />
        <Services />
        <InsightsSection />
      </main>
    </>
  );
}
