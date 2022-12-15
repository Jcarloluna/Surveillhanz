import '../styles/globals.css'
import { motion, AnimatePresence } from 'framer-motion';
import bg from '../public/logo/Surveillhanz.png';


function MyApp({ Component, pageProps, router }) {
  return (
  <AnimatePresence>
  <Component {...pageProps} />
  </AnimatePresence>
  )
}

export default MyApp
