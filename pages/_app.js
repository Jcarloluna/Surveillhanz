import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../public/logo/Surveillhanz.png';


function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
    <motion.div key={router.route} initial="initialPage" animate="animatePage" exit="exitPage"variants={{
      initalPage:{ opacity:0},
      animatePage:{opacity:1},
      exitPage:{opacity:0,transition:{duration:0.3
      }}

    }}>
  <Component {...pageProps} />
  </motion.div>
  </AnimatePresence>
  )
}

export default MyApp
