import { NextPage } from 'next';
import styles from './playlists.module.scss';
import { PlaylistSelection } from '../../interfaces/playlist';
import PlaylistCard from '../game/playlist-card/playlist-card';

interface Props {
  playlists: PlaylistSelection[];
}

const PlaylistLayout: NextPage<Props> = ({playlists}) => {
  
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
