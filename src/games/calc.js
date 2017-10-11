import { cons } from 'hexlet-pairs';
import { makeExpression, toString, result } from '../expression';
import getRandomNumber from '../getRandomNumber';
import startGame from '../startGame';

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

  const getQuestion = () =>
    makeExpression(cons(getRandomNumber(maxValue), getRandomNumber(maxValue)), getRandomOperator());

  const getQuestionString = question => toString(question);
  const getCorrectAnswer = question => String(result(question));

  startGame(rulesMessage, getQuestionString, getQuestion, getCorrectAnswer);
};
