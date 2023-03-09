import { Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from './intro.module.scss';

const IntroLayout: NextPage = () => {

  const router = useRouter();

  return (
    <div
    className={styles.home}
      style={{
        backgroundColor: 'teal',
        width: '100%',
        height: '100vh',
      }}
      onClick={() => router.push('/auth')}
    >
      <Image 
        className={styles.logo}
        src='/images/logo.png' 
        alt='playlist-master' 
      />
      <span className={styles.version}>V0.0.1</span>
    </div>
  );
};

export default IntroLayout;
