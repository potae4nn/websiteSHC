import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const SUT = localFont({
  src: [
    {
      path: "../asset/fonts/SUT-Regular-ver-100.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../asset/fonts/SUT-Regular-ver-100.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../asset/fonts/SUT-Bold-ver-100.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../asset/fonts/SUT-Bold-ver-100.woff2",
      weight: "800",
      style: "italic",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={SUT.className}>
    <Component {...pageProps} />
    // </main>
  );
}
