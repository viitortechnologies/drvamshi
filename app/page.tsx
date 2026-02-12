import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Introduction from "./components/Introduction";
import ImpactHighlights from "./components/ImpactHighlights";
import About from "./components/About";
import Education from "./components/Education";
import Teaching from "./components/Teaching";
import Foundation from "./components/Foundation";
import Recognitions from "./components/Recognitions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Introduction />
        <ImpactHighlights />
        <About />
        <Education />
        <Teaching />
        <Foundation />
        <Recognitions />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
