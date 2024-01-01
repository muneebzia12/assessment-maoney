import React from "react";
import { Box, Link, Typography } from "@mui/material";
import download from "../assets/svgs/download.svg";
import "../styles/main.css";

const Navigation = () => {
  const handleLinkClick = (event?: any) => {
    event.preventDefault();
    // You can add additional logic here if needed
  };

  return (
    <ul className="nav-links">
      {/* USING CHECKBOX HACK */}
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">
        &#9776;
      </label>

      {/* NAVIGATION MENUS */}
      <div className="menu">
        <li>
          <Typography
            component={Link}
            href="/"
            underline="none"
            sx={{ fontFamily: "light" }}
            onClick={handleLinkClick}
          >
            Blog
          </Typography>
        </li>
        <li>
          <Typography
            component={Link}
            href="/"
            underline="none"
            sx={{ fontFamily: "light" }}
            onClick={handleLinkClick}
          >
            Company
          </Typography>
        </li>

        <li className="services">
          <Typography
            component={Link}
            href="/"
            underline="none"
            sx={{ fontFamily: "light" }}
            onClick={handleLinkClick}
          >
            Products
          </Typography>
        </li>
        <li className="services">
          <Typography
            component={Link}
            href="/"
            underline="none"
            sx={{ fontFamily: "light" }}
            onClick={handleLinkClick}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={download} alt="Your Icon" />
              Download
            </Box>
          </Typography>
        </li>
      </div>
    </ul>
  );
};

export default Navigation;
