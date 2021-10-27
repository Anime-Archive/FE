import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  active: {
    color: "#010101",
  },
  disabled: {
    color: "#C4C4C4",
  },
  carousel: {
    width: "900px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  carouselCard: {
    width: "845px",
    height: "415px",
    overflow: "hidden",
    background: "#FFFFFF",
    borderRadius: "28px",
    display: "flex",
  },
  image: {
    height: "415px",
    width: "276px",
  },
  cardInfo: {
    overflow: "hidden",
  },
  cardTitle: {
    width: "521px",
  },
  cardDesc: {
    color: theme.palette.text.secondary,
  },
  nextBtn: {
    width: "35px",
    height: "415px",
    background: "#FFFFFF",
    borderRadius: "5px",
    cursor: "pointer",
    border: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dots: {
    width: "900px",
    height: "25px",
    marginTop: "2%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
