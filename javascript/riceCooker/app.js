// check level of water
// check time spent cooking
// heat from gas
// quantity of salt
// number of stomachs to feed
// pot size small | medium | large

// global constants dictionary
const defaultPotSizes = {
  // people
  small: 3,
  medium: 7,
  large: 10,
};

const defaultWaterLevels = {
  // water
  little: 1,
  okay: 2,
  plenty: 3,
};

const defaultTemperature = {
  // heat
  cold: 50,
  mild: 100,
  hot: 150,
};

const defaultSaltLevels = {
  // salt
  notEnough: 1,
  enough: 3,
  salty: 5,
};

function appCooker(
  waterLevel,
  timeToCook,
  temperature,
  saltLevel,
  numberOfPeople,
  potSize
) {
  //   rice info
  // rice is soft | too soft | hard | too hard | rice texture is perfect
  // rice burnt | not cooked | cooked properly
  // saltiness too salty | no salt | salt is okay
  // food not sufficient | too much | food is enough
  const riceTexture = checkRiceTexture(waterLevel);
  const riceSaltLevel = checkSaltiness();
  console.log(riceTexture);
}

// utility functions

function checkRiceTexture(waterLevel, timeToCook, temperature, potSize) {
  if (waterLevel <= defaultWaterLevels.little) {
    return "rice is too hard";
  } else if (
    defaultWaterLevels.little < waterLevel &&
    waterLevel < defaultWaterLevels.okay
  ) {
    return "rice is hard";
  } else if (waterLevel === defaultWaterLevels.okay) {
    return "rice has a perfect texture";
  } else if (
    defaultWaterLevels.okay < waterLevel &&
    waterLevel < defaultWaterLevels.plenty
  ) {
    return "rice is soft";
  } else {
    return "rice is too soft";
  }
}

function checkSaltiness(saltiness) {}

function start() {
  // const userWaterLevel = prompt(
  //   "Please enter the number for your desired water level, little : " +
  //     defaultWaterLevels.little +
  //     ", medium : " +
  //     defaultWaterLevels.okay +
  //     ", plenty : " +
  //     defaultWaterLevels.plenty
  // );

  // if (Number(userWaterLevel).toString() === "NaN") {
  //   alert("invalid input");
  //   start();
  // } else {
  //   appCooker(userWaterLevel);
  // }

  // saltiness
  const userSaltLevel = prompt(
    "Please enter the number for your desired salt level, little : " +
      defaultSaltLevels.notEnough +
      ", medium : " +
      defaultWaterLevels.okay +
      ", plenty : " +
      defaultWaterLevels.plenty
  );

  if (Number(userSaltLevel).toString() === "NaN") {
    alert("invalid input");
    start();
  } else {
    appCooker(userSaltLevel);
  }
}

// start the app

start();
