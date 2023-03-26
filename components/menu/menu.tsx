import { Button, Heading, Image } from '@chakra-ui/react';
import { FaMusic } from 'react-icons/fa';
import { NextPage } from 'next';
import styles from './menu.module.scss';
import { useRouter } from 'next/router';

const MenuLayout: NextPage = () => {
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
      </Heading>
      <Button
        size="lg"
        className={styles.btnPlay}
        colorScheme="play"
        leftIcon={<FaMusic />}
        onClick={() => router.push('/playlist')}
      >
        Play
      </Button>
    </div>
  );
};

export default MenuLayout;
