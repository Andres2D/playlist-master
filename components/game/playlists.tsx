import { Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import { PlaylistSelection } from '../../interfaces/playlist';
import PlaylistCard from '../game/playlist-card/playlist-card';
import styles from './playlists.module.scss';

interface Props {
  playlists: PlaylistSelection[];
}

const PlaylistLayout: NextPage<Props> = ({playlists}) => {
  
  const playlistsMap = playlists.map(playlist => {
    return <PlaylistCard key={playlist.id} playlist={playlist} />
  })

  return (
    <section className={styles.playlists}>
      <Heading textAlign="center" size="xl" mb={2} color='whiteAlpha.900'>
        Choose the playlist you want to play with
      </Heading>
      {playlistsMap}
    </section> 
  );
};

export default PlaylistLayout;
