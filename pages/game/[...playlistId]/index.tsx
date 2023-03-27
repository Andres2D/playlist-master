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

interface Props {
  playlist: LyricGame[];
}

const Auth: NextPage<Props> = ({playlist}) => {

  const dispatch = useDispatch();
  const gameState = useSelector((state: RootState) => state.game);

  useEffect(() => {
    dispatch(gameSlicesActions.setGameState({playlist, playlistName: 'Liked songs', currentSong: 0}));
  }, [dispatch, playlist]);
  
  return (
    <>
      <Metadata title={`Game | ${gameState.playlistName}`}/>
      <GameLayout />
    </>
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});
  let playlist = await getPlaylistGame(session?.accessToken, Number(process.env.LIMIT_SONGS) || 10);
  if(!session || !playlist) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }
  
  playlist = playlist.sort(() => 0.5 - Math.random());
  
  return {
    props: { 
      session,
      playlist
    }
  }
};

export default Auth;
