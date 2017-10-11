import getRandomNumber from '../getRandomNumber';
import { run, makeTask } from '../game';

export default () => {
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

    return makeTask(`${num1} ${num2}`, String(answer));
  };

  run(rulesMessage, createTask);
};
