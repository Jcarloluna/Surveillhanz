import Hero from "../components/Home/Hero";
import Instruments from "../components/Home/Instruments";
import Definition from "../components/Home/Definition";
import Footer from "../components/Footer";
import NavbarDashboard from "../components/NavbarDashboard";

function Dashboard() {
  return (
    <div>
      <NavbarDashboard/>
      <Hero/>
      <Instruments />
      <Footer/>
    </div>
  );
}

export default Dashboard;


