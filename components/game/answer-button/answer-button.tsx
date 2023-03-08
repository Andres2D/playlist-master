import { NextPage } from 'next';
import { Button } from '@chakra-ui/react';
import styles from './answer-button.module.scss';
import { ButtonStates } from '../../../types/game.types';
import { textColorMap, backgroundColorMap } from '../../../constants/game';

interface Props {
  label: string;
  state: ButtonStates;
  disabled?: boolean;
}

const AnswerButton: NextPage<Props> = ({label, state, disabled}) => {

  return (
   <Button 
      m='5' 
      color={textColorMap[state]}
      colorScheme={backgroundColorMap[state]}
      fontSize='2xl' 
      isDisabled={disabled}
      className={styles.button}
      data-testid='answerOption'
    >
      {label}
   </Button>
  );
};

export default AnswerButton;
