import React from "react";

// MUI Components
import {
  Typography,
  Divider,
  Drawer,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";

// MUI Icons
import TvIcon from "@mui/icons-material/Tv";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";

// Styles
import { makeStyles } from "@mui/styles";

const content = [
  {
    title: "Spaces",
    sections: [
      { name: "Anime", icon: <TvIcon color="primary" /> },
      { name: "Manga", icon: <LibraryBooksIcon /> },
      { name: "Forum", icon: <ForumIcon /> },
      { name: "Search", icon: <SearchIcon /> },
    ],
  },
  {
    title: "Others",
    sections: [{ name: "About", icon: <InfoIcon /> }],
  },
];

const useStyles = makeStyles({});

export const Menu = () => {
  const classes = useStyles();
  return (
    <nav>
      <Drawer variant="permanent">
        <Typography>Anime Archive</Typography>
        <MenuList>
          {content.map((category, idx) => {
            return (
              <div key={category.title}>
                <Typography variant="caption" color="textSecondary">
                  {category.title}
                </Typography>
                {category.sections.map((section) => (
                  <MenuItem key={section.name}>
                    <ListItemIcon>{section.icon}</ListItemIcon>
                    <ListItemText primary={section.name} />
                  </MenuItem>
                ))}
                {idx < content.length - 1 && <Divider variant="middle" />}
              </div>
            );
          })}
        </MenuList>
      </Drawer>
    </nav>
  );
};
