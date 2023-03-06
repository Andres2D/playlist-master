import { Button, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
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
        className={styles.loginButton}
        colorScheme='blackAlpha'
        onClick={() => signIn('spotify_user')}>
          Login
      </Button>
    </div>
  );
};

export default AuthLayout;
