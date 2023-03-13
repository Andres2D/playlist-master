import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import GameLayout from '../../components/game/game';
import { getPlaylistGame } from '../../server/playlist';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { gameSlicesActions } from '../../store/game-slice';
import { LyricGame } from '../../interfaces/game';

interface Props {
  playlist: LyricGame[];
}

const Auth: NextPage<Props> = ({playlist}) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gameSlicesActions.setGameState({playlist, playlistName: 'Liked songs'}));
  }, [dispatch, playlist]);
  
  return (
    <GameLayout />
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});
  const playlist = await getPlaylistGame(session?.accessToken, 25);
  if(!session || !playlist) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: { 
      session,
      playlist
    }
  }
};

export default Auth;
