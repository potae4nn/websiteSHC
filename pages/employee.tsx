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
  useScrollTrigger,
  Fade,
  Fab,
} from "@mui/material";
import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Link, Element, animateScroll as scroll } from "react-scroll";
import MenuIcon from "@mui/icons-material/Menu";

// json file
import dataEmployee from "../mock/employee.json";
import dataDepartment from "../mock/department.json";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement;
}
interface Employee {
  id: number;
  fullname: string;
  image: string;
  tel: string;
  email: string;
  department: Department;
  position: Position;
}

interface Department {
  id: number;
  nameEn: string;
  nameTh: string;
  section: string;
}

interface Position {
  id: number;
  namePos: string;
}

const employees: Employee[] = dataEmployee;
const department: Department[] = dataDepartment;



export default function employee({}: Props) {
  let display: string = "";

  const dataEmp: Employee[] = [...employees];
  dataEmp
    .sort((a, b) => a.position.id - b.position.id)
    .sort((c, d) => c.department.id - d.department.id);

  return (
    <>
      <Layout>
        <IconMenu />
        <br />
        <br />
        {Object.values(dataEmp).map((page: Employee, index) => {
          return (
            <div key={index} className="flex flex-col">
              <div className="ml-6 flex flex-wrap content-around flex-col">
                <p style={{ display: "none" }}>
                  {page.position.id === 2
                    ? (display = "none")
                    : (display = "flex")}
                </p>
                <Element name={page.department.section}>
                  <Typography
                    sx={{
                      display: { display },
                      marginTop: 6,
                      justifyContent: "center",
                    }}
                    variant="h5"
                  >
                    {page.department.nameTh}
                  </Typography>

                  <Typography sx={{ textAlign: "center" }} variant="subtitle1">
                    ตำแหน่ง {page.position.namePos}
                  </Typography>

                  <Card
                    sx={{
                      display: "flex",
                      maxWidth: 500,
                      marginBottom: 2,
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image={page.image}
                      alt="Live from space album cover"
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography component="div" variant="h5">
                          {page.fullname}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          เบอร์โทร: {page.tel}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="text.secondary"
                          component="div"
                        >
                          email: {page.email}
                        </Typography>
                      </CardContent>
                    </Box>
                  </Card>
                </Element>
              </div>
            </div>
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
        {Object.values(department).map((page: Department, index) => {
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
          {Object.values(department).map((page: Department, index) => {
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

