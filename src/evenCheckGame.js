import readlineSync from 'readline-sync';
import { printWelcome, askUserName, getRandomNumber } from '.';

export default () => {
  const trueAnswer = 'yes';
  const falseAnswer = 'no';
  const winsLimit = 3;
  const maxRandomNumber = 30;

  printWelcome();
  console.log(`Answer "${trueAnswer}" if number even otherwise answer "${falseAnswer}".\n`);
  const userName = askUserName();

  const gameIter = (winsCount) => {
    if (winsCount === winsLimit) {
      console.log(`Congratulations, ${userName}`);
      return true;
    }

    const newQuestion = getRandomNumber(maxRandomNumber);
    const correctAnswer = newQuestion % 2 === 0 ? trueAnswer : falseAnswer;
    const userAnswer = readlineSync.question(`Question: ${newQuestion}\nYour answer: `);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return gameIter(winsCount + 1);
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return gameIter(winsCount);
  };

  gameIter(0);
};
