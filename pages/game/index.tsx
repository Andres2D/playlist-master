import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import Metadata from '../../components/meta/metadata';
import { getUserPlaylist } from '../../server/playlist';
import { PlaylistSelection } from '../../interfaces/playlist';
import PlaylistLayout from '../../components/game/playlists';

interface Props {
  playlists: PlaylistSelection[]
}

const Playlist: NextPage<Props> = ({playlists}) => {

  return (
    <>
      <Metadata title='Playlist | Playlist Master' description='Select the playlist to play' />
      <PlaylistLayout playlists={playlists} />
    </>
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});
  let playlists = await getUserPlaylist(session?.accessToken, Number(process.env.LIMIT_PLAYLISTS) || 20);

  if(!session || !playlists) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  playlists = playlists.sort(() => 0.5 - Math.random());

  return {
    props: { 
      session,
      playlists
    }
  }
};

export default Playlist;
