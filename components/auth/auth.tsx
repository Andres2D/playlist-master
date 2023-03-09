import {
  Button,
  Image,
  ButtonGroup
} from '@chakra-ui/react';
import { FaSpotify } from 'react-icons/fa';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import styles from './auth.module.scss';

const AuthLayout: NextPage = () => {
  return (
    <div
      className={styles.home}
      style={{
        backgroundColor: 'teal',
        width: '100%',
        height: '100vh',
        objectFit:'cover',
      }}
    >
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
        style={{
          backgroundColor: '#123837'
        }}
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
