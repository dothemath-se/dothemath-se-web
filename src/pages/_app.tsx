import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fab, fas);

import { AppProps } from "next/app";

export default function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
