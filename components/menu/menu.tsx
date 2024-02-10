import { Button, Heading, Image } from '@chakra-ui/react';
import { FaMusic } from 'react-icons/fa';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styles from './menu.module.scss';
import { loaderSliceActions } from '../../store/loader-slice';

const MenuLayout: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handlePlayClick = () => {
    dispatch(loaderSliceActions.setLoaderState({loading: true}));
    router.push('/game');
  };

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
        colorScheme='blackAlpha'
        leftIcon={<FaMusic />}
        onClick={handlePlayClick}
      >
        Play
      </Button>
    </div>
  );
};

export default MenuLayout;
