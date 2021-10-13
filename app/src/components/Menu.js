import React from "react";

// MUI Components
import {
  Container,
  Typography,
  Divider,
  Drawer,
  List,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// MUI Icons
import TvIcon from "@mui/icons-material/Tv";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";

const content = [
  {
    title: "Spaces",
    sections: [
      { name: "Anime", icon: <TvIcon fontSize="large" /> },
      { name: "Manga", icon: <LibraryBooksIcon fontSize="large" /> },
      { name: "Forum", icon: <ForumIcon fontSize="large" /> },
      { name: "Search", icon: <SearchIcon fontSize="large" /> },
    ],
  },
  {
    title: "Others",
    sections: [{ name: "About", icon: <InfoIcon fontSize="large" /> }],
  },
];

export const Menu = () => {
  return (
    <nav>
      <Drawer variant="permanent">
        <Container>
          <Typography>Anime Archive</Typography>
          <List>
            {content.map((category, idx) => {
              return (
                <div key={category.title}>
                  <ListItemText primary={category.title} />
                  {category.sections.map((section) => (
                    <div key={section.name}>
                      <ListItemIcon>{section.icon}</ListItemIcon>
                      <ListItemText primary={section.name} />
                    </div>
                  ))}
                  {idx < content.length - 1 && <Divider variant="middle" />}
                </div>
              );
            })}
          </List>
        </Container>
      </Drawer>
    </nav>
  );
};
