import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SummaryLayout from './summary';
import { mockGameQuestion } from '../../mock/game.mock';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import gameSliceMock from '../../store/game-slice.mock';


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


describe('SummaryLayout', () => {
  let fakeStore: any;
  beforeEach(() => {
    fakeStore = createTestStore();
  })

  beforeEach(() => {
    render(
      <Provider store={fakeStore}>
        <SummaryLayout />;
      </Provider>
    );
  });

  it('Should render action buttons', () => {
    const endGameElement = screen.getByText('End Game');
    expect(endGameElement).toBeInTheDocument();
  });
});