import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { AppHead, MainFooter, MainHeader } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <AppHead />
      <Component {...pageProps} />
      <MainHeader />
      <MainFooter />
    </Fragment>
  );
}
