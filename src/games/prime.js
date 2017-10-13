import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../utils';
import run from '../game';

const maxValue = 100;
const rulesMessage = 'Answer "yes" if number prime otherwise answer "no".';
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivisor = Math.sqrt(num);

  const hasDivisor = (testDivisor) => {
    if (testDivisor > maxDivisor) {
      return true;
    }
    if (num % testDivisor === 0) {
      return false;
    }

    return hasDivisor(testDivisor + 1);
  };

  return hasDivisor(2);
};

const createTask = () => {
  const question = getRandomNumber(maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => run(rulesMessage, createTask);
