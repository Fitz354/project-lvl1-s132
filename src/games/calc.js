import { cons, car, cdr } from 'hexlet-pairs';
import { run, makeTask } from '../game';
import getRandomNumber from '../getRandomNumber';

export default () => {
  const maxValue = 10;
  const rulesMessage = 'What is the result of the expression?';

  const getRandomOperator = () => {
    const plus = cons('+', (a, b) => a + b);
    const minus = cons('-', (a, b) => a - b);
    const multiple = cons('*', (a, b) => a * b);
    const randomIndex = getRandomNumber(3);

    switch (randomIndex) {
      case 0:
        return plus;
      case 1:
        return minus;
      default:
        return multiple;
    }
  };

  const createTask = () => {
    const leftOperand = getRandomNumber(maxValue);
    const rightOperand = getRandomNumber(maxValue);
    const operator = getRandomOperator();
    const question = `${leftOperand} ${car(operator)} ${rightOperand}`;
    const answer = cdr(operator)(leftOperand, rightOperand);

    return makeTask(question, String(answer));
  };

  run(rulesMessage, createTask);
};
