import { themes } from "../themes/themes";
import { InterestUtils } from "./InterestUtils";

describe("InterestUtils", () => {
  describe("pickInterest", () => {
    it("pick an interest of one", () => {
      const interests = ["HarryPotter"];
      const util = InterestUtils(interests);
      const picked = util.pickInterest();

      expect(picked).toBe("HarryPotter");
    });
    it("pick an interest of two", () => {
      const interests = ["HarryPotter", "TaylorSwift"];
      const util = InterestUtils(interests);
      const picked = util.pickInterest();

      expect(interests.includes(picked)).toBe(true);
    });

    it("pick an interest of two", () => {
      const interests = ["HarryPotter", "TaylorSwift", "StarWars"];
      const util = InterestUtils(interests);
      const picked = util.pickInterest();

      expect(interests.includes(picked)).toBe(true);
    });
  });

  describe("pickThemeName", () => {
    it("pick a name from theme having one interest", () => {
      const interests = ["HarryPotter"];

      const util = InterestUtils(interests);
      const interest = util.pickInterest();
      const pickedName = util.pickNameFromTheme(interest);
      expect(themes[interest].names.includes(pickedName)).toBe(true);
    });

    it("pick a name from theme having two interests", () => {
      const interests = ["HarryPotter", "Star Wars"];

      const util = InterestUtils(interests);
      const interest = util.pickInterest();
      const pickedName = util.pickNameFromTheme(interest);
      expect(themes[interest].names.includes(pickedName)).toBe(true);
    });
  });
});
