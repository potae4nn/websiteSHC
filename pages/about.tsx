import Layout from "@/components/layouts/Layout";
import {
  Card,
  Box,
  CardContent,
  Typography,
  IconButton,
  CardMedia,
  ListItemText,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  CssBaseline,
  Drawer,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

// json file
import dataEmployee from "../mock/employee.json";
import dataAbout from "../mock/about_menu.json";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
interface Employee {
  id: number;
  fullname: string;
  image: string;
  tel: string;
  email: string;
  position: Position;
}

interface About {
  id: number;
  nameEn: string;
  nameTh: string;
  text01?: string;
  text02?: string;
  section: string;
  image: string;
}

interface Position {
  id: number;
  namePos: string;
}

const employees: Employee[] = dataEmployee;
const about: About[] = dataAbout;

export default function employee({}: Props) {
  return (
    <>
      <Layout>
        <IconMenu />
        <div className="mt-20"></div>
        {Object.values(about).map((page: About, index) => {
          return (
            <>
              {/* <div className="flex flex-col"> */}
              {/* <div className="ml-6 flex flex-wrap content-around flex-col"> */}
              <Element key={index} name={page.section}>
                <Box sx={{ marginBottom: 6 }}>
                  <Typography variant="h4" sx={{ textAlign: "center" }}>
                    {page.nameTh}
                  </Typography>
                  <Typography variant="h6" sx={{ textAlign: "left" }}>
                    {page.text01}
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Image
                      src={page.image}
                      width={500}
                      height="0"
                      alt={page.image}
                    />
                  </Box>
                  <Typography variant="h6">{page.text02}</Typography>
                </Box>
              </Element>
              {/* </div> */}
              {/* </div> */}
            </>
          );
        })}
      </Layout>
    </>
  );
}

function IconMenu(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <List>
        {Object.values(about).map((page: About, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link
                  activeClass="active"
                  className={page.section}
                  to={page.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <ListItemText primary={page.nameTh} />
                </Link>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ marginBottom: -14, marginY: 8 }}
        position="fixed"
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {Object.values(about).map((page: About, index) => {
            return (
              <Box
                key={index}
                sx={{ display: { xs: "none", sm: "block" } }}
                className="m-6 cursor-pointer"
              >
                <Link
                  activeClass="active"
                  className={page.section}
                  to={page.section}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <Typography variant="button">{page.nameTh}</Typography>
                </Link>
              </Box>
            );
          })}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
function orderBy(items: any, arg1: string, arg2: string) {
  throw new Error("Function not implemented.");
}
