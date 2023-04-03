import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameLayout from './game';
import { mockGameQuestion } from '../../mock/game.mock';
import { Provider } from 'react-redux';
import { createTestStore } from '../../store/fake-store';

jest.mock("next-auth/react", () => {
  const originalModule = jest.requireActual('next-auth/react');
  const mockSession = {
    expires: new Date(Date.now() + 2 * 86400).toISOString(),
    user: { username: "test" }
  };
  return {
    __esModule: true,
    ...originalModule,
    useSession: jest.fn(() => {
      return {data: mockSession, status: 'authenticated'}  // return type is [] in v3 but changed to {} in v4
    }),
  };
});

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({query: {
    playlistId: 'test'
  }}),
}));

describe('GameLayout', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })

  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <GameLayout />;
      </Provider>
    );
  });

  it('Should render partial lyrics', () => {
    const headerElement = screen.getByTestId('lyrics');
    expect(headerElement).toBeInTheDocument();
    expect(headerElement.textContent).toBe(`"${mockGameQuestion.lyrics} ..."`);
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
