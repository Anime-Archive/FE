// MUI Icons
import TvIcon from "@mui/icons-material/Tv";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import InfoIcon from "@mui/icons-material/Info";

// Menu Content
export const content = [
  {
    title: "Spaces",
    sections: [
      {
        name: "Anime",
        path: "/",
        icon: <TvIcon style={{ color: "#000" }} />,
      },
      {
        name: "Manga",
        path: "/manga",
        icon: <LibraryBooksIcon style={{ color: "#000" }} />,
      },
      {
        name: "Forum",
        path: "/forum",
        icon: <ForumIcon style={{ color: "#000" }} />,
      },
      {
        name: "Search",
        path: "/search",
        icon: <SearchIcon style={{ color: "#000" }} />,
      },
    ],
  },
  {
    title: "Others",
    sections: [
      {
        name: "About",
        path: "/about",
        icon: <InfoIcon style={{ color: "#000" }} />,
      },
    ],
  },
];
