import { NextPage } from 'next';
import AuthLayout from '../../components/auth/auth';
import { getSession } from 'next-auth/react';
import Metadata from '../../components/meta/metadata';

const Auth: NextPage = () => {
  return (
    <>
      <Metadata title='Auth | Playlist Master' description='Login to the app' />
      <AuthLayout />;
    </>
  )
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
