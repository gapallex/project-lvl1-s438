import game from '..';
import randomIntNumber from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; ; i += 1) {
    if (num < i ** 2) {
      return true;
    }
    if (num % i === 0) {
      return false;
    }
  }
};

const gameData = () => {
  const question = randomIntNumber(1, 101);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

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
