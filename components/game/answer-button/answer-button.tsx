import { NextPage } from 'next';
import { Button, Heading } from '@chakra-ui/react';
import styles from './answer-button.module.scss';
import { ButtonStates } from '../../../types/game.types';
import { textColorMap, backgroundColorMap } from '../../../constants/game';

interface Props {
  label: string;
  state: ButtonStates;
  onClick: (answer: string) => void;
  disabled: boolean;
}

const AnswerButton: NextPage<Props> = ({label, state, onClick, disabled = false}) => {

  const handleAnswerClick = () => {
    if(disabled) {
      return;
    }
    onClick(label)
  };

  return (
    
   <Button 
      mb='5' 
      color={textColorMap[state]}
      colorScheme={backgroundColorMap[state]}
      fontSize='2xl' 
      className={styles.button}
      onClick={handleAnswerClick}
      data-testid='answerOption'
    >
      <Heading size='lg' noOfLines={1}>{label}</Heading>
   </Button>
  );
};

export default AnswerButton;
