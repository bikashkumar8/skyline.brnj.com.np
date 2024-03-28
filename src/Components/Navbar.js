/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import EmailIcon from "@mui/icons-material/Email";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const contactUs = [
    {
      text: "+9779811151413",
      icon: <PhoneEnabledIcon fontSize="small" />,
    },
    {
      text: "bikashshah.cse@gmail.com",
      icon: <EmailIcon />,
    },
  ];
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <div>
      <div className="phone-email-topbar-main">
        <div className="phone-email-topbar" style={{ paddingRight: "20px" }}>
          <span className="contact-us-style">{contactUs[0].icon}</span>
          <span className="contact-us-style">{contactUs[0].text}</span>
        </div>
        <div className="phone-email-topbar">
          <span className="contact-us-style">{contactUs[1].icon}</span>
          <span className="contact-us-style">{contactUs[1].text}</span>
        </div>
      </div>

      <nav style={{ backgroundColor: "#f6f6f6" }}>
        <div className="nav-logo-container">
          <img
            width="175"
            height="35"
            src={Logo}
            alt=""
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="navbar-links-container">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-menu-container">
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </div>
        <Drawer
          open={openMenu}
          onClose={() => setOpenMenu(false)}
          anchor="right"
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => setOpenMenu(false)}
            onKeyDown={() => setOpenMenu(false)}
          >
            <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Box>
        </Drawer>
      </nav>
    </div>
  );
};

export default Navbar;
