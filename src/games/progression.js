import game from '..';
import randomIntNumber from '../utils';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;

const makeArray = (beginValue, intervalValue, hiddenElementIndex) => {
  const array = [];

  for (let i = 0; i < progressionLength; i += 1) {
    array.push(i === hiddenElementIndex ? '..' : beginValue + intervalValue * i);
  }
  return array.join(' ');
};

const gameData = () => {
  const beginValue = randomIntNumber(1, 20);
  const intervalValue = randomIntNumber(1, 20);
  const hiddenElementIndex = randomIntNumber(0, progressionLength - 1);
  const rightAnswer = String(beginValue + intervalValue * hiddenElementIndex);

  const question = makeArray(beginValue, intervalValue, hiddenElementIndex);

  return (message) => {
    switch (message) {
      case 'question':
        return question;
      case 'rightAnswer':
        return rightAnswer;
      default:
        return 'Error: wrong message';
    }
  };
};

export default () => game(gameDescription, gameData);
