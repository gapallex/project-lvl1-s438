import readlineSync from 'readline-sync';

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

export const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

export const game = (descriptionGame, gameData) => {
  greeting(descriptionGame);
  console.log('');
  const userName = askUserName();
  console.log('');

  const gameRounds = 3;

  for (let count = 0; count < gameRounds; count += 1) {
    const getGameData = gameData();
    const question = getGameData('question');
    const rightAnswer = getGameData();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const acceptAnswer = 'Correct!';
    const rejectAnswer = `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${userName}!`;

    if (userAnswer === rightAnswer) {
      console.log(acceptAnswer);
    } else {
      return console.log(rejectAnswer);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
