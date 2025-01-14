// src/app/page.js
import Hero from '@/components/home/Hero';
import InsightsSection from '@/components/home/Insights';

export default function Home() {
  return (
    <main>
      <Hero />
      <InsightsSection/>
    </main>
  );
}