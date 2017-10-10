import readlineSync from 'readline-sync';

export const printWelcome = () => console.log('Welcome to Brain Games!');

export const askUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  return userName;
};

export const getRandomNumber = max => Math.floor(Math.random() * max);
