import "../styles/globals.css";
import Header from "../components/header";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
function MyApp({ Component, pageProps }) {
  let url;
  if (typeof window != "undefined") url = window.location.pathname;
  else url = "testing";

  return (
    <div>
      <Component {...pageProps} key={url + "hi"} />
    </div>
  );
}

export default MyApp;
