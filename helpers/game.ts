export const getRandomTracks = (trackNames: string[]): string[] => {
  for (let i = trackNames.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = trackNames[i];
    trackNames[i] = trackNames[j];
    trackNames[j] = temp;
  }
  return trackNames.slice(0, 3);
};
