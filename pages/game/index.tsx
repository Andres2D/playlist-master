import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { useDispatch } from 'react-redux';
import Metadata from '../../components/meta/metadata';
import { getUserPlaylist } from '../../server/playlist';
import { PlaylistSelection } from '../../interfaces/playlist';
import PlaylistLayout from '../../components/game/playlists';
import { loaderSliceActions } from '../../store/loader-slice';
import { sortArrayRandomly } from '../../helpers/game';

interface Props {
  playlists: PlaylistSelection[]
}

const Playlist: NextPage<Props> = ({playlists}) => {

  const dispatch = useDispatch();
  dispatch(loaderSliceActions.setLoaderState({loading: false}));

  return (
    <>
      <Metadata title='Playlist | Playlist Master' description='Select the playlist to play' />
      <PlaylistLayout playlists={playlists} />
    </>
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});
  let playlists = await getUserPlaylist(session?.accessToken, session?.user.email!, Number(process.env.LIMIT_PLAYLISTS) || 20);

  if(!session || !playlists) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  playlists = sortArrayRandomly(playlists);

  return {
    props: { 
      session,
      playlists
    }
  }
};

export default Playlist;
