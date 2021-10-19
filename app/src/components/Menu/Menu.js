import React from "react";

// Components
import { Logo } from "../Logo/Logo.js";

// MUI Components
import {
  Typography,
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  List,
  ListItemButton,
} from "@mui/material";

// Styles
import { useStyles } from "./Styles.js";
import { useHistory, useLocation } from "react-router";

// Content
import { content } from "./Content.js";

export const Menu = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <nav>
      <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
        {/* Logo */}
        <Logo />

        {/* Content */}
        <List>
          {content.map((category, idx) => {
            return (
              <div className={classes.container} key={category.title}>
                <Typography
                  className={classes.categoryTitle}
                  variant="caption"
                  color="textSecondary"
                >
                  {category.title}
                </Typography>

                {category.sections.map((section) => (
                  // Links
                  <ListItemButton
                    selected={location.pathname === section.path}
                    key={section.name}
                    onClick={() => {
                      history.push(section.path);
                    }}
                  >
                    <ListItemIcon>{section.icon}</ListItemIcon>
                    <ListItemText secondary={section.name} />
                  </ListItemButton>
                ))}

                {/* Divider */}
                {idx < content.length - 1 && <Divider variant="middle" />}
              </div>
            );
          })}
        </List>
      </Drawer>
    </nav>
  );
};
