import About from "../components/About";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";

const Home = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <About />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Home;
