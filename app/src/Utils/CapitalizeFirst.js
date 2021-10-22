export default function capitalizeFirst(string) {
  // Returns string with first letter capitalized
  let strLower = string.toLowerCase();

  let strSplit = strLower.split("_");

  let firstWord = strSplit[0];

  strSplit[0] = firstWord[0].toUpperCase() + firstWord.slice(1);

  return strSplit.join(" ");
}
