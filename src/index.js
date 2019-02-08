import readlineSync from 'readline-sync';

const gameRounds = 3;

export default (gameDescription, gameData) => {
  console.log(`Welcome to the Brain Games!\n${gameDescription}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let count = 0; count < gameRounds; count += 1) {
    const getGameData = gameData();
    const question = getGameData('question');
    const rightAnswer = getGameData('rightAnswer');
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
