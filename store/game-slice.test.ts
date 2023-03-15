import store from './index';
import { gameSlicesActions, initialState } from './game-slice';
import { mockGameQuestion } from '../mock/game.mock';
import { LyricsGameState } from '../interfaces/game';

const newState: LyricsGameState = {
  playlist: [
   {
     isrcId: '1',
     lyrics: mockGameQuestion.lyrics,
     answers: mockGameQuestion.answers,
     musxmatchId: 1,
     name: 'Evil - Mercyful Fate',
     spotifyId: '1'
   },
   {
    isrcId: '1',
    lyrics: mockGameQuestion.lyrics,
    answers: mockGameQuestion.answers,
    musxmatchId: 1,
    name: 'Evil - Mercyful Fate',
    spotifyId: '1'
  },
  {
    isrcId: '1',
    lyrics: mockGameQuestion.lyrics,
    answers: mockGameQuestion.answers,
    musxmatchId: 1,
    name: 'Evil - Mercyful Fate',
    spotifyId: '1'
  },
  {
    isrcId: '1',
    lyrics: mockGameQuestion.lyrics,
    answers: mockGameQuestion.answers,
    musxmatchId: 1,
    name: 'Evil - Mercyful Fate',
    spotifyId: '1'
  }
  ],
  currentSong: 0,
  playlistName: 'Liked Songs'
 };

describe('Game redux state', () => {
  it('Should get initial state', () => {
    expect(store.getState().game).toBe(initialState);
  });

  it('Should return new state', () => {
    store.dispatch(gameSlicesActions.setGameState(newState));
    expect(store.getState().game).toEqual(newState);
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
});
