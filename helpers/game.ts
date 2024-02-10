import { LyricGame } from '../interfaces/game';
import { StatsSummary } from '../interfaces/stats';
export const getRandomTracks = (trackNames: string[]): string[] => {
  const randomPositions: number[] = [];

  while(randomPositions.length < 3) {
    const posCrypto = getRealRandom(trackNames.length - 1);
    
    if(!randomPositions.includes(posCrypto)) {
      randomPositions.push(posCrypto);
    }
  }

  const [first, second, third] = randomPositions;

  return [
    trackNames[first],
    trackNames[second],
    trackNames[third]
  ];
};

export const getGameSummary = (playlist: LyricGame[]): StatsSummary => {
  const correct = playlist.filter((track) => {
    return track.state === 'correct';
  }).length;
  return {
    correct,
    wrong: playlist.length - correct,
    percentage: Math.floor((correct / playlist.length) * 100) 
  }
};

export const sortArrayRandomly = (array: any[]) => {
  return array.sort(() => 0.5 - Math.random());
};

const getRealRandom = (maxLimit: number): number => {
  const crypto = require('crypto').webcrypto;
  let byteArray = new Uint8Array(1);
  crypto.getRandomValues(byteArray);
  let randomNum = Number('0.' + byteArray[0].toString());
  randomNum = Math.floor(randomNum * (maxLimit + 1));
  return randomNum;
}
