import "../styles/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
