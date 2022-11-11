const ship = require("../src/shipMethods/shipMethods");

describe("checkForShip", () => {
  let player;

  beforeEach(() => {
    player = {
      ships: [
        {
          locations: [[0, 0]],
        },
      ],
    };
  });

  describe("when player with single ship and coords are given", () => {
    it("should correctly report no ship at a given players coordinate", () => {
      expect(ship.checkForShip(player, [9, 9])).toBe(false);
    });

    it("should correctly report a given players coordinate", () => {
      expect(ship.checkForShip(player, [0, 0])).toBe(true);
    });
  });
});
