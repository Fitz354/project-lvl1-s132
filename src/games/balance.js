import { cons } from 'hexlet-pairs';
import run from '../game';
import { getRandomNumberInRange } from '../utils';

const rulesMessage = 'Balance the given number.';
const minNumber = 11;
const maxNumber = 9999;

const getSumDigits = (num) => {
  const strNum = String(num);
  const iter = (sum, index) => {
    if (strNum.length === index) {
      return sum;
    }

    return iter(sum + Number(strNum[index]), index + 1);
  };

  return iter(0, 0);
};

const makeNumberWithSameDigits = (digit, length) => {
  const iter = (acc) => {
    if (acc.length === length) {
      return Number(acc);
    }
    return iter(acc.concat(digit));
  };

  return iter('');
};

const addOneToDecimals = (num, decimals) => {
  const iter = (acc, count, decimal) => {
    if (count === 0) {
      return acc;
    }

    return iter(acc + decimal, count - 1, decimal * 10);
  };

  return iter(num, decimals, 1);
};

const getBalanceNumber = (num) => {
  const numLength = String(num).length;
  const sumDigits = getSumDigits(num);
  const minDigit = Math.floor(sumDigits / numLength);
  const decimalsToIncrease = sumDigits % numLength;
  const numberFromMinDigits = makeNumberWithSameDigits(minDigit, numLength);

  if (decimalsToIncrease === 0) {
    return numberFromMinDigits;
  }

  return addOneToDecimals(numberFromMinDigits, decimalsToIncrease);
};

const createTask = () => {
  const question = getRandomNumberInRange(minNumber, maxNumber);
  const answer = getBalanceNumber(question);

  return cons(question, String(answer));
};

export default () => run(rulesMessage, createTask);
