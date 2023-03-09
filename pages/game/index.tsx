import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import GameLayout from '../../components/game/game';

const Auth: NextPage = () => {

  return (
    <GameLayout />
  );
};

export const getServerSideProps = async(context: any) => {
  const session = await getSession({req: context.req});

  if(!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
};

export default Auth;
