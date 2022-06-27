import "../styles/globals.css";
import Header from "../components/header";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  let url;
  if (typeof window != "undefined") url = window.location.pathname;
  else url = "testing";

  return (
    <div data-scroll-container>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} key={url + "hi"} />
      </AnimatePresence>
    </div>
  );
}

export default MyApp;
