import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import GameLayout from '../../../components/game/game';
import { getPlaylistGame } from '../../../server/playlist';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { gameSlicesActions } from '../../../store/game-slice';
import { LyricGame } from '../../../interfaces/game';
import Metadata from '../../../components/meta/metadata';
import { RootState } from '../../../interfaces/state';
import { loaderSliceActions } from '../../../store/loader-slice';
import { sortArrayRandomly } from '../../../helpers/game';

interface Props {
  playlistName: string;
  playlist: LyricGame[];
}

const Auth: NextPage<Props> = ({playlist, playlistName}) => {

  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(gameSlicesActions.setGameState({playlist, playlistName, currentSong: 0}));
    dispatch(loaderSliceActions.setLoaderState({loading: false}));
  }, [dispatch, playlist, playlistName]);
  
  return (
    <>
      <Metadata title={`Game | ${gameState.playlistName}`}/>
      <GameLayout />
    </>
  );
};

export const getServerSideProps = async(context: any) => {
  const { playlistId } = context.query;
  const session = await getSession({req: context.req});
  let playlistGame = await getPlaylistGame(playlistId, session?.accessToken, Number(process.env.LIMIT_SONGS) || 10);
  if(!session || !playlistGame || !playlistGame.playlist || playlistGame.playlist.length === 0) {
    return {
      redirect: {
        destination: '/menu',
        permanent: false
      }
    }
  }
  
  const playlist = sortArrayRandomly(playlistGame.playlist);
  
  return {
    props: { 
      session,
      playlist,
      playlistName: playlistGame.playlistName
    }
  }
};

export default Auth;
