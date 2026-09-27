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

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-sand text-ink">
      <IntroLoader />
      <SmoothScroll />
      <SideRail />
      <main>
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
