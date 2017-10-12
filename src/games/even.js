import { cons } from 'hexlet-pairs';
import getRandomNumber from '../getRandomNumber';
import run from '../game';

const maxNumber = 20;
const rulesMessage = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;
const createTask = () => {
  const question = getRandomNumber(maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => run(rulesMessage, createTask);
