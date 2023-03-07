import { NextPage } from 'next';
import { Button } from '@chakra-ui/react';

type ButtonStates = 'basic' | 'correct' | 'wrong';

interface Props {
  label: string;
  state: ButtonStates;
  disabled?: boolean;
}

const textColorMap = {
  basic: 'black',
  correct: 'white',
  wrong: 'white'
};

const backgroundColorMap = {
  basic: 'gray',
  correct: 'green',
  wrong: 'red'
};

const AnswerButton: NextPage<Props> = ({label, state, disabled}) => {

  return (
   <Button 
      m='5' 
      color={textColorMap[state]}
      colorScheme={backgroundColorMap[state]}
      fontSize='2xl' 
      isDisabled={disabled}
    >
      {label}
   </Button>
  );
};

export default AnswerButton;