import getRandomNumber from '../getRandomNumber';
import { run, makeTask } from '../game';

export default () => {
  const maxNumber = 20;
  const isEven = num => num % 2 === 0;
  const rulesMessage = 'Answer "yes" if number even otherwise answer "no".';

  const createTask = () => {
    const question = getRandomNumber(maxNumber);
    const answer = isEven(question) ? 'yes' : 'no';

    return makeTask(question, answer);
  };

  run(rulesMessage, createTask);
};
