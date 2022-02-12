import { themes } from "../themes/themes";

export const InterestUtils = (interests, _themes = themes) => {
  function pickInterest() {
    const interestsLen = interests.length;
    const rand = Math.floor(Math.random() * interestsLen);
    return interests[rand];
  }

  function pickNameFromTheme(interest) {
    const pickedThemeNames = _themes[interest].names;
    const rand = Math.floor(Math.random() * pickedThemeNames.length);
    return pickedThemeNames[rand];
  }

  function pickInterestAndName() {
    const interest = pickInterest();
    return [interest, pickNameFromTheme(interest)];
  }

  return { pickInterest, pickNameFromTheme, pickInterestAndName };
};
