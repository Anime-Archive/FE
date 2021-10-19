import React from "react";

// Styles
import { useStyles } from "./Styles";

// MUI Components
import { Typography } from "@mui/material";

// Media
import aaLogo from "../../media/aa-logo.png";

export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.logoContainer}>
      <img className={classes.logoIcon} src={aaLogo} alt="Anime Archive logo" />
      <Typography>
        Anime <span className={classes.logoText}>Archive</span>
      </Typography>
    </div>
  );
};
