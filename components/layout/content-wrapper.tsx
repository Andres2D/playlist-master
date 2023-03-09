import { NextPage } from 'next';
import Navbar from '../navbar/navbar';
import styles from './content-wrapper.module.scss';
import { useSession } from 'next-auth/react';

interface Props {
  children: JSX.Element;
}

const ContentWrapper: NextPage<Props> = ({ children }) => {

  const { data: session } = useSession();

  return (
    <section className={styles.section}>
      {
        session &&
        <Navbar
          userName={session.user?.name || ''}
          image={session.user?.image || ''}
        />
      }
      {children}
    </section>
  );
};

export default ContentWrapper;
