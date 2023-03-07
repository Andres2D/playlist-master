import { NextPage } from 'next';
import styles from './game.module.scss';
import { Button, Heading } from '@chakra-ui/react';
import AnswerButton from './answer-button/answer-button';
import { useRouter } from 'next/router';

const mockGameQuestion = {
  lyrics: '"..And I was made a mercenary..."',
  answers: [
    'Evil - Mercyful Fate',
    'Time’s Up - O.C',
    'Walk - Pantera',
    'Call me - 90sFlav'
  ]
};

const GameLayout: NextPage = () => {

  const router = useRouter();

  const answersMap = mockGameQuestion.answers.map(answer => 
    <AnswerButton key={answer} label={answer} state='basic' />
  );

  return (
   <section className={styles.section}>
    <Heading size='3xl' textAlign='center'>{mockGameQuestion.lyrics}</Heading>
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
        onClick={() => console.log('cliked')}
        isDisabled
      >
        Next
      </Button>
    </div>
   </section>
  );
};

export default GameLayout;
