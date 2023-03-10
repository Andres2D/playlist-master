import { NextPage } from 'next';
import styles from './game.module.scss';
import { Button, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import AnswerButton from './answer-button/answer-button';
import { mockGameQuestion } from '../../mock/game.mock';

const GameLayout: NextPage = () => {

  const router = useRouter();

  const answersMap = mockGameQuestion.answers.map(answer => 
    <AnswerButton key={answer} label={answer} state='basic' />
  );

  return (
   <section className={styles.section}>
    <Heading size='3xl' textAlign='center' data-testid='lyrics'>{mockGameQuestion.lyrics}</Heading>
    <div className={styles.answers}>
      {answersMap}
    </div>
    <div className={styles.actions}>
      <Button 
        color='white' 
        w='40' 
        colorScheme='red'
        onClick={() => router.push('/menu')}
      >
        End
       Game</Button>
      <Button 
        color='white' 
        w='40' 
        colorScheme='green'
        isDisabled
      >
        Next
      </Button>
    </div>
   </section>
  );
};

export default GameLayout;
