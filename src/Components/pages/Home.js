import "../../App.css";
import MySection from "../MySection";
import Cards from "../Cards";
import About from "../About";
import Contact from "../Contact";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <MySection />
      <About />
      <Skills />
      <Cards />
      <Contact />
    </>
  );
}

export default Home;
