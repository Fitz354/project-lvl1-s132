import { cons } from 'hexlet-pairs';
import run from '../game';
import { getRandomNumber } from '../utils';

const rulesMessage = 'What number is missing in this progression?';
const progressionLength = 10;
const maxStart = 20;
const maxStep = 10;

const getProgressionWithGap = (start, step, length, gapIndex) => {
  const iter = (progression, gap, count) => {
    if (length === count) {
      return cons(progression, String(gap));
    }

    const nextItem = start + (step * count);

    if (count === gapIndex) {
      return iter(progression.concat(' ..'), nextItem, count + 1);
    }

    return iter(progression.concat(` ${nextItem}`), gap, count + 1);
  };

  return iter('', 0, 0);
};

const createTask = () => {
  const startProgression = getRandomNumber(maxStart);
  const stepProgression = getRandomNumber(maxStep);
  const gapIndex = getRandomNumber(progressionLength);

  return getProgressionWithGap(startProgression, stepProgression, progressionLength, gapIndex);
};

export default () => run(rulesMessage, createTask);
