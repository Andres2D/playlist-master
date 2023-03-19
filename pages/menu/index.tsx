import { NextPage } from 'next';
import { useSession, getSession } from 'next-auth/react';
import MenuLayout from '../../components/menu/menu';
import Metadata from '../../components/meta/metadata';

const Menu: NextPage = () => {

  const {data: session} = useSession();

  return (
    <>
      <Metadata title='Menu | Playlist Master' description='Click in play to start a new game' />
      <MenuLayout userName={session?.user?.name || ''} />
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

export default Menu;
