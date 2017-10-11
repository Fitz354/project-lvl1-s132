import getRandomNumber from '../getRandomNumber';
import startGame from '../startGame';

export default () => {
  const trueAnswer = 'yes';
  const falseAnswer = 'no';
  const maxNumber = 20;

  const rulesMessage = `Answer "${trueAnswer}" if number even otherwise answer "${falseAnswer}".`;
  const getQuestion = () => getRandomNumber(maxNumber);
  const getQuestionString = question => question;
  const getCorrectAnswer = (question) => {
    if (question !== 0 && question % 2 === 0) {
      return trueAnswer;
    }

    return falseAnswer;
  };

  startGame(rulesMessage, getQuestionString, getQuestion, getCorrectAnswer);
};
