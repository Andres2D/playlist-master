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
