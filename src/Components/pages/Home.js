import "../../App.css";
import MySection from "../MySection";
import Cards from "../Cards";
import About from "../About";
import Contact from "../Contact";

function Home() {
  return (
    <>
      <MySection />
      <About />
      <Cards />
      <Contact />
    </>
  );
}

export default Home;
