import AboutHero from "../AboutComponent/AboutHero";
import Contact from "../AboutComponent/Contact";
import OurMission from "../AboutComponent/OurMission";
import Services from "../AboutComponent/Services";
import Footer from "../Component/Footer";
import MainNavbar from "../ComponentMainLayout/MainNavbar";
import { useCheckToken } from "../Store";

const About = () => {
  useCheckToken();
  return (
    <div>
      <header>
        <MainNavbar />
      </header>
      <main>
        <AboutHero />
        <OurMission/>
        <Contact/>
        <Services/>
      </main>
      <footer className="bg-[#3B2F4A] h-64 flex items-center justify-center">
        <Footer />
      </footer>
    </div>
  );
};

export default About;
