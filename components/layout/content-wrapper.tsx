import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Navbar from '../navbar/navbar';
import styles from './content-wrapper.module.scss';
import Loader from '../loader/loader';

interface Props {
  children: JSX.Element;
}

const ContentWrapper: NextPage<Props> = ({ children }) => {

  const { data: session } = useSession();

  return (
    <section className={styles.section}>
      {
        session &&
        <>
          <Navbar
            userName={session.user?.name || ''}
            image={session.user?.image || ''}
          />
          <Loader
            text='Loading' 
            loading={true} 
          />
        </>
      }
      {children}
    </section>
  );
};

export default ContentWrapper;
