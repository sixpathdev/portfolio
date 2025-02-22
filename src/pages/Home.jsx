
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from "../components/About";
import Contact from "../components/Contact";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import WhyChooseUs from "../components/WhyChooseUs";
import { useEffect } from 'react';


const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="px-[4%] lg:px-[48px] pt-[160px] pb-[150px]">
        <Hero />
        <About />
        <WhyChooseUs />
        <Features />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
