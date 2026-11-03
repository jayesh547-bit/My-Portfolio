import Hero from './components/Hero.jsx';
import SideRail from './components/SideRail.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Education from './components/Education.jsx';
import Certifications from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import IntroLoader from './components/IntroLoader.jsx';
import SmoothScroll from './components/SmoothScroll.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-sand text-ink">
      {/* Skip to Main Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-xl focus:bg-acid focus:px-4 focus:py-2 focus:font-display focus:text-xs focus:font-black focus:text-ink focus:shadow-lg"
      >
        Skip to main content
      </a>

      <IntroLoader />
      <SmoothScroll />
      <SideRail />
      <WhatsAppButton />

      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Skills />
        <section id="credentials" className="bg-sand text-ink lg:pl-[19rem]">
          <Education />
          <Certifications />
        </section>
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
