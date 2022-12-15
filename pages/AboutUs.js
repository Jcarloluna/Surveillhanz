import AboutUsImage from "../components/AboutUs/AboutUsImage";
import AboutUsText from "../components/AboutUs/AboutUsText";
import AboutUsLinks from "../components/AboutUs/AboutUsLinks";
import Footer from "../components/Footer";
import NavbarAbout from "../components/NavbarAbout";
import Head from 'next/head';




function AboutUs() {
  return (
    <div>
      <Head>
        <title>Surveillhanz | About Us</title>
        <link rel="icon" href="logo/Surveillhanz.ico"/>
        <meta proprety="og:title"content="My page title" key="title"/>
      </Head>
      <NavbarAbout/>
      <AboutUsText/>
      <AboutUsLinks/>
      <AboutUsImage/>
      <Footer/>
    </div>
  );
}

export default AboutUs;