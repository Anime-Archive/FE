import React from "react";

//Routing
import { useHistory } from "react-router";

// MUI Components
import { Typography } from "@mui/material";

// Styles
import { useStyles } from "./Styles";

// Media
import aaLogo from "../../media/aa-logo.png";

export const Logo = () => {
  const history = useHistory();

  const classes = useStyles();
  return (
    <div
      className={classes.logoContainer}
      onClick={() => {
        history.push("/");
      }}
    >
      <img className={classes.logoIcon} src={aaLogo} alt="Anime Archive logo" />
      <Typography>
        Anime <span className={classes.logoText}>Archive</span>
      </Typography>
    </div>
  );
};
