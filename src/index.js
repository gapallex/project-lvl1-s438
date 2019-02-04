import readlineSync from 'readline-sync';

export const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('');
  let userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
};
