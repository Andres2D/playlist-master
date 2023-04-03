import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useEffect } from 'react';
import styles from './summary.module.scss';
import { RootState } from '../../interfaces/state';
import { gameSlicesActions, initialState } from '../../store/game-slice';
import { getGameSummary } from '../../helpers/game';
import { loaderSliceActions } from '../../store/loader-slice';
 
const SummaryLayout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const totalQuestions = gameState.playlist.length;

  useEffect(() => {
    if(totalQuestions === 0) {
      dispatch(loaderSliceActions.setLoaderState({loading: true}));
      router.push('/game');
    }else {
      dispatch(loaderSliceActions.setLoaderState({loading: false}));
    }
  }, [totalQuestions, router, dispatch]);
  
  const { correct, wrong } = getGameSummary(gameState.playlist);
  
  const handleEndGame = () => {
    dispatch(loaderSliceActions.setLoaderState({loading: true}));
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
            {correct}
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
            {wrong}
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
