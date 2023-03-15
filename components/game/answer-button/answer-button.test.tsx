import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnswerButton from './answer-button';

describe('AnswerButton', () => {

  it('Should render button with base props', () => {
    render(<AnswerButton onClick={() => {}} label='test' state='basic' />);
    const buttonElement = screen.getByText('test');
    expect(buttonElement).toBeInTheDocument();
  });
});
