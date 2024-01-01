import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Accounts from "../assets/svgs/global-accounts.svg";
import GlobalList from "./GlobalList";
import useIsMobile from "./useIsMobile";
const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function GlobalCompare() {
  const Root = styled("div")(({ theme }) => ({
    width: "100%",
    ...theme.typography.body2,
    "& > :not(style) ~ :not(style)": {
      marginTop: theme.spacing(2),
    },
  }));
  const { isMobile } = useIsMobile();

  return (
    <>
      <Grid container>
        <Grid item xs>
          <div
            style={{
              margin: "30px",
            }}
          >
            <GlobalList />
          </div>
        </Grid>
        {isMobile ? (
          <Root>
            <Divider>VS</Divider>
          </Root>
        ) : (
          <Divider orientation="vertical" flexItem>
            VS
          </Divider>
        )}

        <Grid item xs>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#EAE7FFB2",
              borderRadius: "30px",
              flexDirection: "column",
              margin: "30px",
            }}
          >
            <img
              src={Accounts}
              width={300}
              height={300}
              alt="no"
              style={{ marginTop: "4rem", maxWidth: "-webkit-fill-available" }}
            />
            <p className="heading">Global accounts in minutes </p>
            <div
              style={{
                display: "flex",
                justifyContent: "start",
                margin: "10px",
              }}
            >
              <div className="intro-desc" style={{ textAlign: "left" }}>
                FinanceFast solves problems by proving low fees, fast transfers,
                <p style={{ textAlign: "left" }}>
                  secure transactions, and a user-friendly platform.
                </p>
              </div>

              <div className="intro-desc-mob" style={{ textAlign: "left", fontFamily:'light' }}>
                Say Goodbye to the Hassles of Traditional Money
                <p style={{ textAlign: "left", fontFamily:'light' }}>
                  Transfers. Effortlessly transfer with ease.{" "}
                </p>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
