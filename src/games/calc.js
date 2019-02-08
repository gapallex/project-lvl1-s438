import game from '..';
import randomIntNumber from '../utils';

const gameDescription = 'What is the result of the expression?';
const randomOperator = str => str[randomIntNumber(0, str.length)];

const calcRightAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      return num1 * num2;
  }
};

const gameData = () => {
  const num1 = randomIntNumber(1, 10);
  const num2 = randomIntNumber(1, 10);
  const operator = randomOperator('+-*');
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = String(calcRightAnswer(num1, num2, operator));

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
