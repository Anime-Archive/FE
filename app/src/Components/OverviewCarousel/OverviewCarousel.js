import { useEffect, useState } from "react";

// MUI components
import { Container, Typography } from "@mui/material";

// MUI icons
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CircleIcon from "@mui/icons-material/Circle";

// Styles
import useStyles from "./Styles";

// Functions
import animeFilterObj from "../../Utils/AnimeFilterObj";
import mangaFilterObj from "../../Utils/MangaFilterObj";

// Truncate
import HTMLEllipsis from "react-lines-ellipsis/lib/html";

// Dummy Data
import carouselData from "../../DummyData/CarouselData.js";

const OverviewCarousel = () => {
  const classes = useStyles();

  let carouselType = "manga";

  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState(
    carouselType === "anime"
      ? animeFilterObj(carouselData[index])
      : mangaFilterObj(carouselData[index])
  );

  function incrementBtn() {
    if (index === carouselData.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  useEffect(() => {
    setCurrent(
      carouselType === "anime"
        ? animeFilterObj(carouselData[index])
        : mangaFilterObj(carouselData[index])
    );
  }, [index, carouselType]);

  return (
    <>
      <div className={classes.carousel}>
        <div className={classes.carouselCard}>
          <div>
            <img
              src={current.coverImage}
              alt="trending entry"
              className={classes.image}
            />
          </div>

          <Container className={classes.cardInfo}>
            <Typography
              noWrap
              gutterBottom
              variant="h3"
              className={classes.cardTitle}
            >
              {current.title}
            </Typography>

            {/* ANIME SPECIFIC */}
            {carouselType === "anime" && (
              <Typography
                gutterBottom
              >{`${current.studio} • ${current.format}`}</Typography>
            )}

            {/* MANGA SPECIFIC */}
            {carouselType === "manga" && (
              <Typography gutterBottom>
                {current.volumes !== 0
                  ? `Volumes ${current.volumes} • ${current.format}`
                  : `${current.status} • ${current.format}`}
              </Typography>
            )}

            <HTMLEllipsis
              className={classes.cardDesc}
              unsafeHTML={current.description}
              ellipsisHTML="..."
              maxLine="3"
              basedOn="words"
            />
          </Container>
        </div>

        <button className={classes.nextBtn} onClick={() => incrementBtn()}>
          <ChevronRightIcon fontSize="large" />
        </button>
      </div>

      <div className={classes.dots}>
        {carouselData.map((element, j) => (
          <CircleIcon
            key={element.id}
            fontSize="small"
            className={index === j ? classes.active : classes.disabled}
          />
        ))}
      </div>
    </>
  );
};

export default OverviewCarousel;
