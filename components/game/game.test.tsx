import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GameLayout from './game';
import { mockGameQuestion } from '../../mock/game.mock';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import gameSliceMock from '../../store/game-slice.mock';
import { gameMockEmptySlice } from '../../store/game-slice.mock';


jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

const createTestStore = () => {
  const store = configureStore({
    reducer: {
      game: gameSliceMock
    }
  });
  return store;
};

const createEmptyTestStore = () => {
  const store = configureStore({
    reducer: {
      game: gameMockEmptySlice.reducer
    }
  });
  return store;
};



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

describe('Empty state game', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createEmptyTestStore();
  })

  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <GameLayout />;
      </Provider>
    );
  });

  it('Should render loading message', () => {
    const loadingMessage = screen.getByText('Loading ...');
    expect(loadingMessage).toBeInTheDocument();
  })

});
