import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AnswerButton from './answer-button';

describe('AnswerButton', () => {

  it('Should render button with base props', () => {
    render(<AnswerButton label='test' state='basic' />);
    const buttonElement = screen.getByText('test');
    expect(buttonElement).toBeInTheDocument();
  });

  it('Should render disabled button', () => {
    render(<AnswerButton label='test' state='wrong' disabled />);
    const buttonElement = screen.getByText('test');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute('disabled');
  });

});
