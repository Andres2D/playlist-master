import { LyricGame } from '../interfaces/game';
import { StatsSummary } from '../interfaces/stats';
export const getRandomTracks = (trackNames: string[]): string[] => {
  const randomPositions: number[] = [];

  while(randomPositions.length < 3) {
    const pos = Math.floor(Math.random() * (trackNames.length - 1));
    if(!randomPositions.includes(pos)) {
      randomPositions.push(pos);
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
