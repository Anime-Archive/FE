import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
    width: "276px",
    height: "415px",
  },
  cardTitle: {
    width: "521px",
  },
  next: {
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
});

export default useStyles;
