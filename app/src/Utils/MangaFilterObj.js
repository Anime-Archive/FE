// Images
import defaultCover from "../Media/default-cover.png";

// Functions
import capitalizeFirst from "./CapitalizeFirst.js";

export default function mangaFilterObj(entry) {
  // Returns the manga object entry passed-in, replacing null values with text
  let mangaObj = {
    id: 0,
    coverImage: defaultCover,
    title: "Title Unknown",
    volumes: 0,
    status: "Status Unknown",
    format: "Format Unknown",
    description: "Description Unknown",
  };

  // update manga object with available data
  // id
  mangaObj.id = entry.id;

  // coverImage
  if (entry.coverImage.extraLarge) {
    mangaObj.coverImage = entry.coverImage.extraLarge;
  }

  // title
  if (entry.title.userPreferred) {
    mangaObj.title = entry.title.userPreferred;
  } else if (entry.title.english) {
    mangaObj.title = entry.title.english;
  }

  // volumes
  if (entry.volumes) {
    mangaObj.volumes = entry.volumes;
  }

  // status
  if (entry.status) {
    mangaObj.status = capitalizeFirst(entry.status);
  }

  // format
  if (entry.format) {
    mangaObj.format = capitalizeFirst(entry.format);
  }

  // description
  if (entry.description) {
    mangaObj.description = entry.description;
  }

  return mangaObj;
}
