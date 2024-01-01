import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Typography } from "@mui/material";
import useIsMobile from "./useIsMobile";
import EmailInput from "./Email";

const legalMenu: Array<any> = [
  {
    label: "Terms & conditions",
    path: "#",
  },
  {
    label: "Privacy policy",
    path: "#",
  },
];

const productMenu = [
  {
    label: "Money conversion",
    path: "#",
  },
  {
    label: "International transactions",
    path: "#",
  },
  {
    label: "International transactions",
    path: "#",
  },
];

const companyMenu: Array<any> = [
  { label: "About", path: "#" },
  { label: "Contact", path: "#" },
  { label: "Blog", path: "#" },
];

interface NavigationItemProps {
  label: string;
  path: string;
}

const NavigationItem: FC<NavigationItemProps> = ({ label, path }) => {
  return (
    <div style={{ padding: "15px 2px" }}>
      <Typography
        color={"black"}
        component={Link}
        href="/"
        underline="none"
        onClick={() => {}}
        style={{
          fontSize: "14px",
          fontWeight: "500",
          lineHeight: "19px",
          letterSpacing: "0em",
          textAlign: "left",
          fontFamily: "light",
        }}
      >
        {label}
      </Typography>
    </div>
  );
};

const FooterNavigation: FC = () => {
  const { isMobile } = useIsMobile();
  return (
    <div style={{ display: "flex" }}>
      <Grid
        container
        spacing={2}
        style={{
          margin: isMobile ? "1rem 2rem" : "15px 4rem",
          fontFamily: "light",
        }}
      >
        <Grid item xs={5} sm={5} md={4} xl={3}>
          <Typography style={{ fontFamily: "light" }} variant="h6">
            Company{" "}
          </Typography>
          {companyMenu.map(({ label, path }, index) => (
            <NavigationItem
              key={index + path}
              label={label}
              path={/* path */ "#"}
            />
          ))}
        </Grid>
        <Grid item xs={5} sm={5} md={4} xl={3}>
          <Typography style={{ fontFamily: "light" }} variant="h6">
            Product
          </Typography>
          {productMenu.map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}
        </Grid>
        <Grid item xs={5} sm={5} md={4} xl={3}>
          <Typography style={{ fontFamily: "light" }} variant="h6">
            Legal
          </Typography>
          {legalMenu.map(({ label, path }, index) => (
            <NavigationItem key={index + path} label={label} path={path} />
          ))}
        </Grid>
      </Grid>
      {isMobile ? null : (
        <Grid
          container
          style={{ margin: isMobile ? "1rem 2rem" : "15px 4rem" }}
        >
          <Grid item xs={6}>
            <Typography
              style={{
                width: "max-content",
                padding: "10px",
                fontFamily: "medium",
              }}
              variant="h6"
            >
              Sign up for our newsletter
            </Typography>
            <EmailInput />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default FooterNavigation;
