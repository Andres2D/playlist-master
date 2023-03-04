import { Button, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import styles from './auth.module.scss';

const AuthLayout: NextPage = () => {
  return (
    <div className={styles.card}>
      <Image 
        className={styles.logo}
        src='/images/logo.png' 
        alt='playlist-master' 
      />
      <Image 
        className={styles.logo}
        src='/images/spotify.svg' 
        alt='spotify' 
      />
      <Button 
        className={styles.facebookButton} 
        colorScheme='facebook'>
          Facebook
      </Button>
      <Button 
        className={styles.googleButton} 
        colorScheme='whiteAlpha'>
          Google
      </Button>
    </div>
  );
};

export default AuthLayout;
