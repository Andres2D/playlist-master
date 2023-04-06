export const getTweetUrl = (score: number, playlistName: string) => {
  const urlParams = 
  `text=${encodeURIComponent(`I get a new score of ${score}% on the playlist "${playlistName}". Play with me on: `)}&url=https://playlist-master.vercel.app/&hashtags=spotify,game&via=Andres_2D_`;
  return `https://twitter.com/intent/tweet?${urlParams}`;
};
