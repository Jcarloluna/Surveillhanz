import AboutUsImage from "../components/AboutUs/AboutUsImage";
import AboutUsText from "../components/AboutUs/AboutUsText";
import AboutUsLinks from "../components/AboutUs/AboutUsLinks";
import Footer from "../components/Footer";
import NavbarAbout from "../components/NavbarAbout";
import { motion } from 'framer-motion';


function AboutUs() {
  return (
    <div>
      <NavbarAbout/>
      <AboutUsText/>
      <AboutUsLinks/>
      <AboutUsImage/>
      <Footer/>
    </div>
  );
}

export default AboutUs;