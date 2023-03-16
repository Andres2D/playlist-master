import store from './index';
import { gameSlicesActions, initialState } from './game-slice';
import { newStateMock } from '../mock/game.mock';

describe('Game redux state', () => {
  it('Should get initial state', () => {
    expect(store.getState().game).toBe(initialState);
  });

  it('Should return new state', () => {
    store.dispatch(gameSlicesActions.setGameState(newStateMock));
    expect(store.getState().game).toEqual(newStateMock);
  });

  it('Should get new song', () => {
    store.dispatch(gameSlicesActions.nextGame());
    expect(store.getState().game.currentSong).toBe(1);
  });

  it('Should not get new song', () => {
    store.dispatch(gameSlicesActions.nextGame());
    store.dispatch(gameSlicesActions.nextGame());
    store.dispatch(gameSlicesActions.nextGame());
    store.dispatch(gameSlicesActions.nextGame());
    expect(store.getState().game.currentSong).toBe(3);
  });

  it('Should update the question state', () => {
    store.dispatch(gameSlicesActions.setQuestionState({spotifyId: '1', questionState: 'correct'}));
    expect(store.getState().game.playlist[0].state).toBe('correct');
  });
});
