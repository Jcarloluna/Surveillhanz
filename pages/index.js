import Hero from "../components/Home/Hero";
import NavbarHome from "../components/NavbarHome";
import Instruments from "../components/Home/Instruments";
import Definition from "../components/Home/Definition";
import Footer from "../components/Footer";
import Head from 'next/head';

function Surveillhanz() {
  return (
    <div>
      <Head>
        <title>Surveillhanz</title>
        <link rel="icon" href="logo/Surveillhanz.ico"/>
      </Head>
      <NavbarHome/>
      <Hero/>
      <Definition/>
      <Instruments />
      <Footer/>
    </div>
  );
}
export default Surveillhanz;

