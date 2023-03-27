import { NextPage } from 'next';
import styles from './playlists.module.scss';
import { useRouter } from 'next/router';
import { PlaylistSelection } from '../../interfaces/playlist';
import PlaylistCard from '../../pages/playlist/playlist-card/playlist-card';

interface Props {
  playlists: PlaylistSelection[];
}


const PlaylistLayout: NextPage<Props> = ({playlists}) => {
  const router = useRouter();
  
  const playlistsMap = playlists.map(playlist => {
    return <PlaylistCard key={playlist.id} playlist={playlist} />
  })

  return (
    <section className={styles.playlists}>
      {playlistsMap}
    </section> 
  );
};

export default PlaylistLayout;
