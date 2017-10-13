import { cons } from 'hexlet-pairs';
import run from '../game';
import { getRandomNumber } from '../utils';

const rulesMessage = 'What number is missing in this progression?';
const progressionLength = 10;
const progressionMaxStart = 20;
const progressionMaxStep = 10;

const getProgressionWithGap = (start, step, length, gapIndex) => {
  const makeProgression = (result, gap, count) => {
    if (length === count) {
      return cons(result, String(gap));
    }

    const nextItem = start + (step * count);

    if (count === gapIndex) {
      return makeProgression(result.concat(' ..'), nextItem, count + 1);
    }

    return makeProgression(result.concat(` ${nextItem}`), gap, count + 1);
  };

  return makeProgression('', 0, 0);
};

const createTask = () => {
  const startProgression = getRandomNumber(progressionMaxStart);
  const stepProgression = getRandomNumber(progressionMaxStep);
  const gapIndex = getRandomNumber(progressionLength);

  return getProgressionWithGap(startProgression, stepProgression, progressionLength, gapIndex);
};

export default () => run(rulesMessage, createTask);
