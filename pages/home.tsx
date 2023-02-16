import Layout from "@/components/layouts/Layout";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
  IconButton,
  useTheme,
  Button,
  Fab,
  useScrollTrigger,
  Fade,
} from "@mui/material";
import ReactDOM from "react-dom";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Parallax, Background } from "react-parallax";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import * as Scroll from "react-scroll";

// type Props = {};

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}


function ScrollTop(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClickTotop = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#banner');

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
        behavior: "smooth"
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClickTotop}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function home(props: Props) {
  // const [scrollPosition, setPosition] = useState(0);
  // const [showButtonTotop, setShowButtonTotop] = useState(false);
  // useEffect(() => {
  //   function updatePosition() {
  //     setPosition(window.pageYOffset);
  //   }
  //   window.addEventListener("scroll", updatePosition);
  //   updatePosition();
  //   return () => window.removeEventListener("scroll", updatePosition);
  // }, []);

  // useEffect(() => {
  //   if (scrollPosition > 500) {
  //     setShowButtonTotop(true);
  //   } else {
  //     setShowButtonTotop(false);
  //   }
  // }, [showButtonTotop, scrollPosition]);

  const settingsFlex = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const settingsReport = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 50000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
  };

  const insideStyles: any = {
    top: "90%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <>
      <Layout>
        {/* <div>home</div> */}
        {/* <div className="zoom-bg"> */}
        <Parallax bgImage={"/bannershc.jpeg"} strength={250}>
          <div id="banner" className="-mt-20 h-screen w-full">
            {/* <div style={insideStyles} > */}
            <div style={insideStyles} className="relative flex justify-center">
              <Scroll.Link
                activeClass="active"
                to="news"
                spy={true}
                smooth={true}
                offset={-70}
                duration={800}
              >
                <ExpandMoreIcon className="text-white animate-bounce text-7xl cursor-pointer" />
              </Scroll.Link>
              {/* </div> */}
            </div>
          </div>
        </Parallax>
        {/* </div> */}

        <div
          id="news"
          className="mt-3 mb-6 flex flex-col items-center place-content-stretch flex-wrap"
        >
          <h3 className="text-4xl font-medium">ข่าวสาร</h3>
        </div>
        <div className="grid justify-items-center lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card sx={{ maxWidth: 400 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/bannershc.jpeg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>

        <div className="mt-10 mb-6 flex flex-col items-center flex-wrap">
          <h3 className="text-4xl font-medium">สิ่งอำนวยความสะดวก</h3>
        </div>

        {/* <div className="flex flex-row"> */}
        <Slider {...settingsFlex}>
          <div className="flex cursor-pointer flex-row transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Zoom>
              <Card sx={{ display: "flex", margin: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 800 }}
                  src="/bannershc.jpeg"
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </div>
          <div className="flex cursor-pointer flex-row transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Zoom>
              <Card sx={{ display: "flex", margin: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 800 }}
                  src="/bannershc.jpeg"
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </div>
          <div className="flex cursor-pointer flex-row transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Zoom>
              <Card sx={{ display: "flex", margin: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 800 }}
                  src="/bannershc.jpeg"
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </div>
          <div className="flex cursor-pointer flex-row transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Zoom>
              <Card sx={{ display: "flex", margin: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 800 }}
                  src="/bannershc.jpeg"
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </div>
          <div className="flex cursor-pointer flex-row transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
            <Zoom>
              <Card sx={{ display: "flex", margin: 1 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 800 }}
                  src="/bannershc.jpeg"
                  alt="Live from space album cover"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </Card>
            </Zoom>
          </div>
        </Slider>
        {/* </div> */}
        <Slider {...settingsReport}>
          <div>
            <div className="mt-10 mb-6 flex flex-col items-center flex-wrap">
              <h3 className="text-4xl font-medium">
                รายงานประจำปี 2565 สถานกีฬาและสุขภาพ
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <iframe
                style={{ width: "60%", height: "500px" }}
                src="http://online.anyflip.com/xvzjp/ktap/"
                allowTransparency={true}
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
          <div>
            <div className="mt-10 mb-6 flex flex-col items-center flex-wrap">
              <h3 className="text-4xl font-medium">
                รายงานประจำปี 2564 สถานกีฬาและสุขภาพ
              </h3>
            </div>
            <div className="flex flex-col items-center">
              <iframe
                style={{ width: "60%", height: "500px" }}
                src="http://online.anyflip.com/xvzjp/ktap/"
                allowTransparency={true}
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </Slider>
        <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
        {/* {showButtonTotop == true ? (
          <Box>
            <Fab
              sx={{
                color: "#b72324",
                position: "fixed",
                bottom: 16,
                right: 16,
              }}
              size="medium"
              aria-label="add"
              color="inherit"
            >
              <Scroll.Link
                activeClass="active"
                to="banner"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                <UpIcon />
              </Scroll.Link>
            </Fab>
          </Box>
        ) : (
          <></>
        )} */}
      </Layout>
    </>
  );
}
