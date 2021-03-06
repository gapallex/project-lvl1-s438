import game from '..';
import randomIntNumber from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const gameData = () => {
  const num1 = randomIntNumber(1, 100);
  const num2 = randomIntNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(gcd(num1, num2));

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
