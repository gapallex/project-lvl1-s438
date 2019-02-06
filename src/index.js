import readlineSync from 'readline-sync';

const userName = () => {
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

const question = () => {
  const randomIntNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const number = randomIntNumber(1, 1000);
  console.log(`Question: ${number}`);

  const rightAnswer = (number % 2 === 0 ? 'yes' : 'no');
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const isEvenGame = (name, round) => {
  for (let count = 0; count < round; count += 1) {
    if (question(name) === false) {
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (count === round - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export const welcome = () => {
  greeting();
  console.log('');
  userName();
};


export const evenGame = () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  greeting(rules);
  console.log('');
  const name = userName();
  console.log('');
  isEvenGame(name, 3);
};
