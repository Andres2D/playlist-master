import { Button, ButtonGroup, useColorMode, Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import { FaSpotify } from 'react-icons/fa';
import RequestAccess from '../request-access/request-access';
import styles from './auth.module.scss';

const AuthLayout: NextPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div>

    <div className={styles.header}>
      <button type="button"
      onClick={toggleColorMode}>
        {colorMode === 'dark' &&
          <Image
          src="/images/dark-mode-icon.svg"
          alt="dark-mode-icon"
        />
        }
        {colorMode === 'light' &&
        <Image
        src="/images/light-mode-icon.svg"
        alt="light-mode-icon"
      />
        }
        </button>
    </div>
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
          colorScheme='blackAlpha'
          leftIcon={<FaSpotify />}
          onClick={() => signIn('spotify_user')}
        >
          Login
        </Button>
      </ButtonGroup>
      <RequestAccess />
    </div>
    </div>
  );
};

export default AuthLayout;
