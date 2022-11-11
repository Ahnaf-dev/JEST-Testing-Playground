const checkForShip = (player, checkCoords) => {
  const ships = player.ships;
  let shipExists;

  for (let ship of ships) {
    shipExists = ship.locations.filter(
      (location) =>
        location[0] === checkCoords[0] && location[1] === checkCoords[1]
    );
  }

  const shipDoesNotExist = shipExists.length < 1;

  if (shipDoesNotExist) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  checkForShip,
};
