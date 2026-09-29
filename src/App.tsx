import Loader from '@/components/Loader';
import CustomCursor from '@/components/CustomCursor';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collections from '@/components/Collections';
import WhyChooseUs from '@/components/WhyChooseUs';
import Gallery from '@/components/Gallery';
import Materials from '@/components/Materials';
import EmiBanner from '@/components/EmiBanner';
import Testimonials from '@/components/Testimonials';
import Statistics from '@/components/Statistics';
import Process from '@/components/Process';
import Faq from '@/components/Faq';
import CtaBanner from '@/components/CtaBanner';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Loader />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        <Hero />
        <Collections />
        <WhyChooseUs />
        <Gallery />
        <Materials />
        <EmiBanner />
        <Testimonials />
        <Statistics />
        <Process />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
