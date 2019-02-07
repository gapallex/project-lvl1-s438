import { game, randomIntNumber, randomOperator } from '..';

const description = 'What is the result of the expression?';
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

const gameData = (message) => {
  const num1 = randomIntNumber(1, 10);
  const num2 = randomIntNumber(1, 10);
  const operator = randomOperator('+-*');
  const question = `${num1} ${operator} ${num2}`;
  const rightAnswer = calcRightAnswer(num1, num2, operator);
  switch (message) {
    case 'question':
      return question;
    default:
      return rightAnswer;
  }
};

export default () => game(description, gameData);
