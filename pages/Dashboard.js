import Footer from "../components/Footer";
import NavbarDashboard from "../components/NavbarDashboard";
import DashboardContent from "../components/Dashboard/DashboardContent";
import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <div>
      <NavbarDashboard/>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden:{
          scale:0.8,
          opacity:0
        },
        visible: {
          scale:1,
          opacity:1,
          transition:{
            delay:0.3
          }

        }
      }
      }>
      <DashboardContent/>
      </motion.div>
      <Footer/>
    </div>
  );
}

export default Dashboard;


