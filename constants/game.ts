import { AnswerButtonState } from '../interfaces/game';
import { PlaylistSelection } from '../interfaces/playlist';

export const textColorMap: AnswerButtonState = {
  basic: 'blackAlpha',
  correct: 'white',
  wrong: 'white'
};

export const backgroundColorMap: AnswerButtonState = {
  basic: 'blackTeal',
  correct: 'green',
  wrong: 'red'
};

export const MUSIXMATCH_COPYRIGHT = '******* This Lyrics is NOT for Commercial use *******\n(1409623199341)';

export const likedSongsPlaylist: PlaylistSelection = {
  id: 'liked-songs',
  description: 'Your liked songs',
  image: '/images/liked-songs-picture.png',
  name: 'Liked Songs',
  tracks: 20,
  bestScore: 0
}
