export const getRandomTracks = (trackNames: string[]): string[] => {
  const shuffled = trackNames.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};
