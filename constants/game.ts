import { AnswerButtonState } from '../interfaces/game';
import { PlaylistSelection } from '../interfaces/playlist';

export const DEFAULT_ANSWERS_LIST_LIMIT = 50;

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

export const defaultAnswersSongs: string[] = [
  'No Sé Que Hacer',
  'Make up Your Mind',
  'The Look of Love',
  'Alquimia',
  'Killing Me Softly With His Song',
  'The Unnamed Feeling',
  'The Adults Are Talking',
  'United States Of Whatever',
  'Hip Hop Hooray',
  'Cut Your Hair',
  'Slave Only Dreams To Be King',
  'Le Monde - From Talk to Me',
  'Daydream',
  'Ave Nocturna',
  'Heart In a Cage',
  'Stay Away',
  'Ángulo Interludio',
  'Break Stuff',
  'Chase The Devil',
  'A.M. 180',
  'Write This Down (feat. Nieve)',
  'Blue Monday',
  'Miss Alissa',
  'Hoy por Hoy',
  'Me Or The Papes',
  'mitad humano y robot',
  'Go With The Flow',
  "Time's Up",
  'Walk',
  'Invocation',
  'I Like It (I Wanna Be Where You Are)',
  "Toma Jabon Pa' Que Laves",
  "Hittin' Switches - Instrumental",
  'Inglorious (feat. Skepta)',
  'Doorman',
  'adhd',
  'Deal Wiv It',
  'Pressure In My Palms (feat. slowthai, Vince Staples)',
  'El Despilfarro',
  'El Remate',
  'PRIDE.',
  '¿Qué Les Pasa?',
  'Shook Ones, Pt. II',
  "Tom's Diner",
  'Old Town Road - Remix',
  'Salven la Torre del Reloj',
  'push (feat. Deb Never)',
  'Oh How Lovely',
  'Bloodstains',
  'Jugadoras,Jugadores'
]
