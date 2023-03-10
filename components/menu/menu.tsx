import { Button, Heading, Image, Highlight } from '@chakra-ui/react';
import { FaMusic } from 'react-icons/fa';
import { NextPage } from 'next';
import styles from './menu.module.scss';
import { SettingsIcon, TriangleDownIcon, MoonIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';

interface Props {
  userName: string;
}

const MenuLayout: NextPage<Props> = ({ userName }) => {
  const router = useRouter();

  return (
    <div className={styles.home}>
      <Image
        className={styles.logo}
        src="/images/logo.png"
        alt="playlist-master"
      />
      <Image className={styles.logo} src="/images/menu.svg" alt="menu" />
      <Heading lineHeight="taller" size="lg" m={6}>
        <Highlight
          query={['questions', 'spotify', 'playlists']}
          styles={{ px: '1', py: '1', rounded: 'full', bg: 'teal.100' }}
          data-testid="message"
        >
          The questions are obtained from your spotify playlists
        </Highlight>
      </Heading>
      <Button
        size="lg"
        className={styles.btnPlay}
        colorScheme="play"
        leftIcon={<FaMusic />}
        onClick={() => router.push('/game')}
      >
        Play
      </Button>
    </div>
  );
};

export default MenuLayout;
