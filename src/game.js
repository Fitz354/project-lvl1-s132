import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const getUserName = () => readlineSync.question('May I have your name? ');

export const makeTask = (question, answer) => cons(question, answer);

export const run = (rulesMessage, createTask) => {
  const winsLimit = 3;

  console.log('Welcome to Brain Games!');
  console.log(`${rulesMessage}\n`);
  const userName = getUserName();
  console.log(`Hello, ${userName}`);

  const gameIter = (winsCount) => {
    if (winsCount === winsLimit) {
      return `Congratulations, ${userName}`;
    }

    const task = createTask();
    const question = car(task);
    const answer = cdr(task);
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer === userAnswer) {
      console.log('Correct!');
      return gameIter(winsCount + 1);
    }

    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`;
  };

  console.log(gameIter(0));
};
