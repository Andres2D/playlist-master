import { NextPage } from 'next';
import { useSession, getSession } from 'next-auth/react';
import MenuLayout from '../../components/menu/menu';

const Menu: NextPage = () => {

  const {data: session} = useSession();

  return (
    <MenuLayout userName={session?.user?.name || ''} />
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
