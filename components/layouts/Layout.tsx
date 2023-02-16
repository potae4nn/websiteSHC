import * as React from "react";
import Header from "./Head";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import localFont from "@next/font/local";
import Image from "next/image";
import Footer from "./Footer";

const SUT = localFont({
  src: [
    {
      path: "../../asset/fonts/SUT-Regular-ver-100.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../asset/fonts/SUT-Regular-ver-100.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../asset/fonts/SUT-Bold-ver-100.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../asset/fonts/SUT-Bold-ver-100.woff2",
      weight: "800",
      style: "italic",
    },
  ],
});

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}

export default function Layout(props: Props) {
  const children = props.children;
  return (
    <>
      <Header {...props} />
      <Box
        component="main"
        className="sx:pt-2"
        sx={{ flexGrow: 1, p: 2, pt: 8 }}
      >
        {children}
      </Box>
      <Footer/>
    </>
  );
}
