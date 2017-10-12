import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../utils';
import run from '../game';

const maxValue = 100;
const rulesMessage = 'Find the greatest common divisor of given numbers.';
const getMaxDivider = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getMaxDivider(b, a % b);
};

const createTask = () => {
  const num1 = getRandomNumber(maxValue);
  const num2 = getRandomNumber(maxValue);
  const answer = getMaxDivider(num1, num2);

  return cons(`${num1} ${num2}`, String(answer));
};

export default () => run(rulesMessage, createTask);
