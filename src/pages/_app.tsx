import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";

import LayoutProvider from "../context/LayoutProvider";
import { GlobalStyles, theme } from "../constants/theme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <Component {...pageProps} />
    </LayoutProvider>
  );
}

export default MyApp;
