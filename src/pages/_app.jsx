import { ToastContainer } from "react-toastify";

import { GlobalStyle } from "../styles/global";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
