import { cons } from 'hexlet-pairs';
import { getRandomNumber } from '../utils';
import run from '../game';

const maxValue = 100;
const rulesMessage = 'Answer "yes" if number prime otherwise answer "no".';
const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  const iter = (i) => {
    if (i * i > number) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }

    return iter(i + 1);
  };

  return iter(2);
};

const createTask = () => {
  const question = getRandomNumber(maxValue);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => run(rulesMessage, createTask);
