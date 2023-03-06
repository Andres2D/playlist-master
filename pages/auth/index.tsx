import { NextPage } from 'next';
import styles from './auth.module.scss';
import AuthLayout from '../../components/auth/auth';
import { getSession } from 'next-auth/react';

const Auth: NextPage = () => {
  return (
    <section className={styles.auth}>
      <AuthLayout />
    </section>
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});

  if(session) {
    return {
      redirect: {
        destination: '/menu',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
};


export default Auth;
