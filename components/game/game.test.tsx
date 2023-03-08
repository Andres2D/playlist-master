import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameLayout from './game';
import { mockGameQuestion } from '../../mock/game.mock';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));


describe('GameLayout', () => {

  beforeEach(() => {
    render(<GameLayout />);
  });

  it('Should render partial lyrics', () => {
    const headerElement = screen.getByTestId('lyrics');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(mockGameQuestion.lyrics);
  });

  it('Should render the answers list', () => {
    const answersList = screen.getAllByTestId('answerOption');
    expect(answersList).toHaveLength(mockGameQuestion.answers.length);
  });

  it('Should render action buttons', () => {
    const endGameElement = screen.getByText('End Game');
    const nextElement = screen.getByText('Next');
    expect(endGameElement).toBeInTheDocument();
    expect(nextElement).toBeInTheDocument();
  });
});
