import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {
    logoText: {
      color: theme.palette.primary.main,
    },
    logoIcon: {
      width: 50,
      height: "auto",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      padding: ` 0 ${theme.spacing(2)}`,
      margin: `${theme.spacing(2)} 0`,
    },
  };
});
