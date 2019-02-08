import game from '..';
import randomIntNumber from '../utils';


const gameDescription = 'What number is missing in the progression?';

const makeArray = () => {
  const beginValue = randomIntNumber(1, 10);
  const intervalValue = randomIntNumber(1, 10);
  const arrayLength = 10;
  const array = [beginValue];

  for (let i = 1; i < arrayLength; i += 1) {
    array[i] = array[i - 1] + intervalValue;
  }
  return array;
};

const arrayData = () => {
  const array = makeArray();
  const hiddenIndex = randomIntNumber(0, array.length - 1);
  const getHiddenValue = array[hiddenIndex];

  array[hiddenIndex] = '..'; // to hide value in array

  const strForQuestion = () => {
    let str = '';
    for (let i = 0; i < array.length; i += 1) {
      str = `${str}${array[i]} `;
    }
    return str;
  };

  return (message) => {
    switch (message) {
      case 'question':
        return strForQuestion();
      default:
        return String(getHiddenValue);
    }
  };
};

const gameData = () => {
  const getGameData = arrayData();
  const question = getGameData('question');
  const rightAnswer = getGameData();

  return (message) => {
    switch (message) {
      case 'question':
        return question;
      default:
        return rightAnswer;
    }
  };
};

export default () => game(gameDescription, gameData);
