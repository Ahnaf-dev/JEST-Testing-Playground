const displayTotalSalary = require("../src/salary/salary");

describe("displayTotalSalary", () => {
  describe("When two salaries are given", () => {
    it("should display the total amount", () => {
      expect(displayTotalSalary(10, 10)).toBe("Total: 20");
    });
  });
});
