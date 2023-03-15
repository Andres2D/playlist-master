import { NextPage } from 'next';
import { Button, Heading } from '@chakra-ui/react';
import { ButtonStates } from '../../../types/game.types';
import { textColorMap, backgroundColorMap } from '../../../constants/game';

interface Props {
  label: string;
  state: ButtonStates;
  onClick: (answer: string) => void;
  disabled?: boolean;
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
      onClick={handleAnswerClick}
      data-testid='answerOption'
    >
      <Heading size='md' noOfLines={1}>{label}</Heading>
   </Button>
  );
};

export default AnswerButton;
