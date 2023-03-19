import { Image } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import styles from './intro.module.scss';

const IntroLayout: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.home} onClick={() => router.push('/auth')}>
      <Image
        className={styles.logo}
        src="/images/logo.png"
        alt="playlist-master"
      />
      <span className={styles.version}>{process.env.NEXT_PUBLIC_APP_VERSION}</span>
    </div>
  );
};

export default IntroLayout;
