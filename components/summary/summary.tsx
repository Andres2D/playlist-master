import {
  Button,
  Card,
  CardBody,
  CircularProgress,
  CircularProgressLabel,
  Heading,
  Link,
  Stack,
  Stat,
  StatArrow,
  StatNumber
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import { NextPage } from 'next';
import { useEffect } from 'react';
import styles from './summary.module.scss';
import { RootState } from '../../interfaces/state';
import { gameSlicesActions, initialState } from '../../store/game-slice';
import { getGameSummary } from '../../helpers/game';
import { loaderSliceActions } from '../../store/loader-slice';
import XIcon from '../../icons/x';
import { getTweetUrl } from './constants';

const SummaryLayout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);
  const totalQuestions = gameState.playlist.length;

  useEffect(() => {
    if (totalQuestions === 0) {
      dispatch(loaderSliceActions.setLoaderState({ loading: true }));
      router.push('/game');
    } else {
      dispatch(loaderSliceActions.setLoaderState({ loading: false }));
    }
  }, [totalQuestions, router, dispatch]);

  const { correct, wrong, percentage } = getGameSummary(gameState.playlist);

  const handleEndGame = () => {
    dispatch(loaderSliceActions.setLoaderState({ loading: true }));
    dispatch(gameSlicesActions.setGameState(initialState));
    router.push('/game');
  };

  return (
    <div className={styles.home}>
      <Heading lineHeight="taller" size="lg" textAlign="center" color="White">
      Playlist: {gameState.playlistName}
      </Heading>
      <Heading
        lineHeight="taller"
        size="lg"
        m={6}
        textAlign="center"
        color="White"
      >
        {correct > wrong ? 'Well done :)' : 'Could be better :/'}
      </Heading>
      <CircularProgress value={percentage} size="150px" color="green.400">
        <CircularProgressLabel color="White">
          <Stat>
            <StatNumber>
              {percentage}% <StatArrow type="increase" />
            </StatNumber>
          </Stat>
        </CircularProgressLabel>
      </CircularProgress>

      <Card
        direction={{ base: 'row', sm: 'row' }}
        variant="elevated"
        display="flex"
        m={3}
      >
        <Stack>
          <CardBody color="green.400">
            <Heading size="lg">Correct</Heading>
            <Heading
              size="lg"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {correct}
            </Heading>
          </CardBody>
        </Stack>

        <Stack color="red.300">
          <CardBody>
            <Heading size="lg">Incorrect</Heading>
            <Heading
              size="lg"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              {wrong}
            </Heading>
          </CardBody>
        </Stack>
      </Card>
      <div className={styles.actions}>
        <Button
          size="lg"
          className={styles.btnEndGame}
          colorScheme="blackAlpha"
          m={2}
          onClick={handleEndGame}
          color="White"
        >
          End Game
        </Button>
        <Link
          as={NextLink}
          className={styles.link}
          href={getTweetUrl(percentage, gameState.playlistName)}
          isExternal
        >
          <Button
            className={styles.btnTwitter}
            size="lg"
            rightIcon={<XIcon />}
            m={2}
            color="White"
          >
            Share in
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SummaryLayout;
