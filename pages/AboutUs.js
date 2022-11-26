import AboutUsImage from "../components/AboutUs/AboutUsImage";
import AboutUsText from "../components/AboutUs/AboutUsText";
import AboutUsLinks from "../components/AboutUs/AboutUsLinks";
import Footer from "../components/Footer";
import NavbarAbout from "../components/NavbarAbout";


function AboutUs() {
  return (
    <div>
      <NavbarAbout/>
      <AboutUsText/>
      <AboutUsImage/>
      <AboutUsLinks/>
      <Footer/>
    </div>
  );
}

export default AboutUs;