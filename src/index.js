import readlineSync from 'readline-sync';
// import gameData from './games/brain-calc'

const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return `${name}`;
};

const greeting = (rules = '') => {
  console.log('Welcome to the Brain Games!');
  if (rules !== '') {
    console.log(`${rules}`);
  }
};

export const welcome = () => {
  greeting();
  console.log('');
  askUserName();
};

export const randomIntNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const isEven = num => num % 2 === 0;
export const randomOperator = str => str[Math.floor(Math.random() * str.length)];

export const game = (description, gameData) => {
  greeting(description);
  console.log('');
  const name = askUserName();
  console.log('');

  const round = 3;
  const showCongrats = `Congratulations, ${name}!`;

  for (let count = 0; count < round; count += 1) {
    const question = gameData('question');
    const rightAnswer = gameData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const showCorrect = 'Correct!';
    const showWrong = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`;

    if (userAnswer === rightAnswer) {
      console.log(showCorrect);
    } else {
      return console.log(showWrong);
    }
  }
  console.log(showCongrats);
};
