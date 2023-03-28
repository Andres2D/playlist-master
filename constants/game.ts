import { AnswerButtonState } from '../interfaces/game';
import { PlaylistSelection } from '../interfaces/playlist';

export const textColorMap: AnswerButtonState = {
  basic: 'black',
  correct: 'white',
  wrong: 'white'
};

export const backgroundColorMap: AnswerButtonState = {
  basic: 'gray',
  correct: 'green',
  wrong: 'red'
};

export const MUSIXMATCH_COPYRIGHT = '******* This Lyrics is NOT for Commercial use *******\n(1409623199341)';

export const likedSongsPlaylist: PlaylistSelection = {
  id: 'liked-songs',
  description: 'Your liked songs',
  image: '/images/liked-songs-picture.png',
  name: 'Liked Songs',
  tracks: 20
}
