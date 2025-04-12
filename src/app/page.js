import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import InsightsSection from '@/components/home/Insights';
import ContactFormModal from '@/components/contactForm';


export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <InsightsSection/>
      
    </main>
  );
}