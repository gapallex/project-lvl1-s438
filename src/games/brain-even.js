import { game, randomIntNumber, isEven } from '..';

const evenGame = () => {
  const description = 'Answer "yes" if number even otherwise answer "no".';
  const question = randomIntNumber();
  const rightAnswer = isEven ? 'yes' : 'no';
  game(description, question, rightAnswer);
};

export default evenGame;
