import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const winsLimit = 3;

export default (rulesMessage, createTask) => {
  console.log('Welcome to Brain Games!');
  console.log(`${rulesMessage}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  const gameIter = (winsCount) => {
    if (winsCount === winsLimit) {
      return true;
    }

    const task = createTask();
    const question = car(task);
    const answer = cdr(task);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
      return gameIter(winsCount + 1);
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
    return false;
  };

  if (gameIter(0)) {
    console.log(`Congratulations, ${userName}`);
  }

  console.log(`Let's try again, ${userName}!`);
};
