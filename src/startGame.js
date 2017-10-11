import readlineSync from 'readline-sync';

export default (rulesMessage, getQuestionString, getQuestion, getCorrectAnswer) => {
  const winsLimit = 3;

  console.log('Welcome to Brain Games!');
  console.log(`${rulesMessage}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  const gameIter = (winsCount) => {
    if (winsCount === winsLimit) {
      console.log(`Congratulations, ${userName}`);
      return true;
    }

    const newQuestion = getQuestion();
    const correctAnswer = getCorrectAnswer(newQuestion);
    const userAnswer = readlineSync.question(`Question: ${getQuestionString(newQuestion)}\nYour answer: `);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return gameIter(winsCount + 1);
    }

    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    return false;
  };

  gameIter(0);
};
