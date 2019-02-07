import { game, randomIntNumber, isEven } from '..';

const descriptionGame = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const question = randomIntNumber(1, 1000);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

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
