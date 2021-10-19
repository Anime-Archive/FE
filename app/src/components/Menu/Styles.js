import { makeStyles } from "@mui/styles";

const drawerWidth = 200;

export const useStyles = makeStyles((theme) => {
  return {
    drawerPaper: {
      padding: `${theme.spacing(2)} 0`,
      width: drawerWidth,
      height: `auto !important`,
      border: "1px solid rgba(0, 0, 0, 0.12)",
      borderRadius: "0 0 15px 15px",
    },
    container: {
      marginTop: theme.spacing(2),
    },
    categoryTitle: {
      paddingLeft: theme.spacing(2),
    },
  };
});
