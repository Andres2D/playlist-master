import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import SummaryLayout from '../../components/summary/summary';
import { getPlaylistGame } from '../../server/playlist';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { gameSlicesActions } from '../../store/game-slice';
import { LyricGame } from '../../interfaces/game';
import Metadata from '../../components/meta/metadata';
import { RootState } from '../../interfaces/state';

interface Props {
  playlist: LyricGame[];
}

const Summary: NextPage<Props> = () => {
  
  return (
    <>
      <Metadata title={`Summary`}/>
      <SummaryLayout />
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
  
  return {
    props: { 
      session,
      playlist
    }
  }
};

export default Summary;
