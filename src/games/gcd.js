import { cons } from 'hexlet-pairs';
import { makeExpression, toString, result } from '../expression';
import getRandomNumber from '../getRandomNumber';
import startGame from '../startGame';

export default () => {
  const maxValue = 100;
  const rulesMessage = 'Find the greatest common divisor of given numbers.';
  const maxDivider = (a, b) => {
    if (b === 0) {
      return a;
    }

    return maxDivider(b, a % b);
  };
  const getQuestion = () => makeExpression(cons(getRandomNumber(maxValue), getRandomNumber(maxValue)), cons('', maxDivider));
  const getQuestionString = question => toString(question);
  const getCorrectAnswer = question => String(result(question));

  startGame(rulesMessage, getQuestionString, getQuestion, getCorrectAnswer);
};
