import game from '..';
import randomIntNumber from '../utils';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

const gameData = () => {
  const question = randomIntNumber(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

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
