import { NextPage } from 'next';
import { getSession, useSession } from 'next-auth/react';
import Navbar from '../../components/navbar/navbar';
import GameLayout from '../../components/game/game';

const Auth: NextPage = () => {
  const {data: session} = useSession();

  return (
    <>
      <Navbar 
        userName={session?.user?.name || ''}
        image={session?.user?.image || ''}
      />
      <GameLayout />
    </>
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
