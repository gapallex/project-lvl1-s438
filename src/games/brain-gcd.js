import { game, randomIntNumber, gcd } from '..';

const descriptionGame = 'Find the greatest common divisor of given numbers.';

const calcRightAnswer = (num1, num2) => {
  if (num1 > num2) {
    return gcd(num1, num2);
  }
  return gcd(num2, num1);
};

const gameData = () => {
  const num1 = randomIntNumber(1, 100);
  const num2 = randomIntNumber(1, 100);
  const question = `${num1} ${num2}`;
  const rightAnswer = String(calcRightAnswer(num1, num2));

  return (message) => {
    switch (message) {
      case 'question':
        return question;
      default:
        return rightAnswer;
    }
  };
};

export default () => game(descriptionGame, gameData);
