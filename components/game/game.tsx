import { NextPage } from 'next';
import { Button, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './game.module.scss';
import AnswerButton from './answer-button/answer-button';
import { RootState } from '../../interfaces/state';
import { gameSlicesActions } from '../../store/game-slice';
import { ButtonStates, QuestionState } from '../../types/game.types';

const GameLayout: NextPage = () => {
  const router = useRouter();
  const gameState = useSelector((state: RootState) => state.game);
  const dispatch = useDispatch();
  const [answerSelected, setAnswerSelected] = useState<string | undefined>(
    undefined
  );

  if (gameState.playlist.length === 0) {
    return (
      <Heading>{
        `You don't have any liked song :(.
          Please like at least 20 songs in
         your spotify app to star playing this game.`}
      </Heading>
    )
  }

  const currentTrack = gameState.playlist[gameState.currentSong];

  const handleAnswerSelection = (answer: string) => {
    const questionState: QuestionState = answer === currentTrack.name ? 'correct' : 'wrong'; 
    setAnswerSelected(answer);
    dispatch(gameSlicesActions.setQuestionState({ spotifyId: currentTrack.spotifyId!, questionState }));
  };

  const handleNextTrack = () => {
    dispatch(gameSlicesActions.nextGame());
    setAnswerSelected(undefined);
  };

  const getButtonState = (answer: string): ButtonStates => {
    if (!answerSelected) {
      return 'basic';
    }

    return answer === answerSelected && answer === currentTrack.name
      ? 'correct'
      : answer === answerSelected
      ? 'wrong'
      : 'basic';
  };

  const getLyrics = (lyrics: string) => {
    if (lyrics.length < 351) {
      return `"${lyrics} ..."`;
    }
    return `"${lyrics.slice(0, 350)} ..."`;
  };

  const answersMap = currentTrack?.answers?.map((answer) => (
    <AnswerButton
      key={answer}
      label={answer}
      state={getButtonState(answer)}
      disabled={Boolean(answerSelected)}
      onClick={handleAnswerSelection}
    />
  ));

  return (
    <>
      <Heading textAlign="right" size="xl" mb={2}>
        {`${gameState.currentSong + 1}/${gameState.playlist.length + 1}`}
      </Heading>
      <Heading
        size="md"
        textAlign="justify"
        data-testid="lyrics"
        mb="5"
        opacity="0.7"
      >
        {getLyrics(gameState.playlist[gameState.currentSong].lyrics!)}
      </Heading>
      <div className={styles.answers}>{answersMap}</div>
      <div className={styles.actions}>
        <Button
          color="white"
          w="40"
          colorScheme="red"
          onClick={() => router.push('/menu')}
        >
          End Game
        </Button>
        <Button
          color="white"
          w="40"
          mb="5"
          colorScheme="green"
          isDisabled={!answerSelected}
          onClick={handleNextTrack}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default GameLayout;
