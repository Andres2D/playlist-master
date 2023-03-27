import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import styles from './summary.module.scss';
import { RootState } from '../../interfaces/state';
import { gameSlicesActions, initialState } from '../../store/game-slice';

const SummaryLayout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const totalQuestions = gameState.playlist.length;

  const getCorrectAnswers = () => {
    return gameState.playlist.filter((element) => {
      return element.state === 'correct';
    }).length;
  };

  const handleEndGame = () => {
    dispatch(gameSlicesActions.setGameState(initialState));
    router.push('/game');
  };

  return (
    <div className={styles.home}>
      <Heading lineHeight="taller" size="lg" m={6}>
        Good Job!
      </Heading>
      <Image
        className={styles.logo}
        src="/images/completed.svg"
        alt="completed"
      />
      <Flex color="white" mb={6}>
        <Box flex="1" m={2} color="green.500">
          <Heading size="xl">Correct</Heading>
          <Heading
            size="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {getCorrectAnswers()}
          </Heading>
        </Box>
        <Box flex="1" m={2} color="tomato">
          <Heading size="xl">Incorrect</Heading>
          <Heading
            size="lg"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            {totalQuestions - getCorrectAnswers()}
          </Heading>
        </Box>
      </Flex>
      <Button
        size="lg"
        className={styles.btnEndGame}
        colorScheme="play"
        onClick={handleEndGame}
      >
        End Game
      </Button>
    </div>
  );
};

export default SummaryLayout;
