import { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Navbar from '../navbar/navbar';
import styles from './content-wrapper.module.scss';
import Loader from '../loader/loader';
import { useSelector } from 'react-redux';
import { RootState } from '../../interfaces/state';

interface Props {
  children: JSX.Element;
}

const ContentWrapper: NextPage<Props> = ({ children }) => {

  const { data: session } = useSession();
  const loaderState = useSelector((state: RootState) => state.loader);

  return (
    <section className={styles.section}>
      {
        session &&
        <Navbar
          userName={session.user?.name || ''}
          image={session.user?.image || ''}
        />
      }
      {
        loaderState.loading && 
        <Loader
         text='Loading' 
        />
      }
      {children}
    </section>
  );
};

export default ContentWrapper;
