import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Demo from './components/Demo';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Demo />
        <Features />
        <Testimonials />
        <FAQ />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
