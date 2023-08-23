import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
import homeImg from "../Images/hommw.jpg";
function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={homeImg}
        title="Your Journey Your Story"
        text="Choose your favourite destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}

export default Home;
