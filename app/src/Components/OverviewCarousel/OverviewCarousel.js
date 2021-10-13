import { useEffect, useState } from "react";

// MUI components
import { Container, Icon, Typography } from "@mui/material";

// MUI icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";

// Styles
import useStyles from "./OverviewCarouselStyles";

// Dummy Data
import carouselData from "../../DummyData/CarouselData.js";

const OverviewCarousel = () => {
  const classes = useStyles();

  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(carouselData[index]);

  function incrementBtn() {
    if (index === carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    setCurrent(carouselData[index]);
  }, [index]);

  return (
    <>
      <div>
        <img src={current.coverImage.extraLarge} alt="trending entry" />
        <Container>
          <Typography>{current.title.userPreferred}</Typography>
          <Typography>{current.studios.nodes[0].name}</Typography>
          <Typography>{current.description}</Typography>
        </Container>

        <Icon onClick={() => incrementBtn()}>
          <ChevronRightIcon />
        </Icon>
      </div>

      <div>
        {carouselData.map((element, i) => (
          <Icon
            key={element.id}
            className={index === i ? classes.active : classes.disabled}
          >
            <CircleIcon />
          </Icon>
        ))}
      </div>
    </>
  );
};

export default OverviewCarousel;
