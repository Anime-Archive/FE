// Images
import defaultCover from "../Media/default-cover.png";

// Functions
import capitalizeFirst from "./CapitalizeFirst.js";

export default function animeFilterObj(entry) {
  // Returns the anime object entry passed-in, replacing null values with text
  let animeObj = {
    id: 0,
    coverImage: defaultCover,
    title: "Title Unknown",
    studio: "Studio Unknown",
    format: "Format Unknown",
    description: "Description Unknown",
  };

  // update anime object with available data
  // id
  animeObj.id = entry.id;

  // coverImage
  if (entry.coverImage.extraLarge) {
    animeObj.coverImage = entry.coverImage.extraLarge;
  }

  // title
  if (entry.title.userPreferred) {
    animeObj.title = entry.title.userPreferred;
  } else if (entry.title.english) {
    animeObj.title = entry.title.english;
  }

  // studio
  if (entry.studios.nodes.length > 0) {
    animeObj.studio = entry.studios.nodes[0].name;
  }

  // format
  if (entry.format) {
    animeObj.format = capitalizeFirst(entry.format);
  }

  // description
  if (entry.description) {
    animeObj.description = entry.description;
  }

  return animeObj;
}
