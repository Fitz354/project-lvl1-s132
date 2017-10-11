import getRandomNumber from '../getRandomNumber';
import startGame from '../startGame';

export default () => {
  const maxNumber = 20;
  const isEven = num => num % 2 === 0;
  const rulesMessage = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => getRandomNumber(maxNumber);
  const getQuestionString = question => question;
  const getCorrectAnswer = (question) => {
    if (isEven(question)) {
      return 'yes';
    }

    return 'no';
  };

  startGame(rulesMessage, getQuestionString, getQuestion, getCorrectAnswer);
};
