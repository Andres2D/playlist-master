import { Button, Image, ButtonGroup } from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import styles from './auth.module.scss';

const AuthLayout: NextPage = () => {
  return (
    <div className={styles.home}>
      <Image
        className={styles.logo}
        src="/images/connection.svg"
        alt="connection"
      />
      <Image
        className={styles.logo}
        src="/images/logo.png"
        alt="playlist-master"
      />

      <ButtonGroup>
        <Button
          size="lg"
          colorScheme="spotify"
          className={styles.btnSignIn}
          leftIcon={<FaSpotify />}
          onClick={() => signIn('spotify_user')}
        >
          Sign up
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default AuthLayout;
