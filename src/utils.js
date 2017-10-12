export const getRandomNumber = max => Math.floor(Math.random() * max);

export const getRandomNumberInRange = (min, max) =>
  Math.floor(Math.random() * ((max - min) + 1)) + min;
