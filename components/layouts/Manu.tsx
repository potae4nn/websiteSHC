import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
// import Link from "next/link";
import Image from "next/image";

type Props = {};

interface Pages {
  id: number;
  namepageEn: string;
  namepageTh: string;
  route: string;
}
const pages: Pages[] = [
  {
    id: 1,
    namepageEn: "Home",
    namepageTh: "หน้าแรก",
    route: "home",
  },
  {
    id: 2,
    namepageEn: "About",
    namepageTh: "เกี่ยวกับสถานกีฬา",
    route: "about",
  },
  {
    id: 3,
    namepageEn: "Employee",
    namepageTh: "บุคลากร",
    route: "employee",
  },
];

export default function Manu({}: Props) {
  const router = useRouter();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (e: any, path: string) => {
    router.push(`/${path}`);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="primary"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {Object.values(pages).map((page: Pages, index) => (
            <MenuItem sx={{color:"#000000"}} key={index} onClick={(e) => handleClick(e, page.route)}>
              <Typography textAlign="center"> {page.namepageTh}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
        <Image src="/logo.png" alt="logo" width="64" height="64" />
      </Box>

      {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
      <Typography
        variant="subtitle1"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          // letterSpacing: ".3rem",
          color: "#000000",
          textDecoration: "none",
        }}
      >
        {/* สถานกีฬาและสุขภาพ */}
      </Typography>
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {Object.values(pages).map((page: Pages, index) => {
          return (
            <Button
              key={index}
              onClick={(e) => handleClick(e, page.route)}
              sx={{ my: 2, color: "#000000", display: "block" }}
            >
              {page.namepageTh}
            </Button>
          );
        })}
      </Box>
    </>
  );
}
