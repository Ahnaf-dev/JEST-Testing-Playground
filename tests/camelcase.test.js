const camelCase = require("../src/camelCase/camelCase");

describe("camelCase", () => {
  describe("when string such as border is given", () => {
    it("should return border", () => {
      expect(camelCase("border")).toBe("border");
    });
  });

  describe("when string such as text-transform is given", () => {
    it("should return textTransform", () => {
      expect(camelCase("text-transform")).toBe("textTransform");
    });
  });

  describe("when string such as border-color-red is given", () => {
    it("should return borderColorRed", () => {
      expect(camelCase("border-color-red")).toBe("borderColorRed");
    });
  });
});
