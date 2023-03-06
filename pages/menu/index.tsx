import { Avatar, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useSession, signOut, getSession } from 'next-auth/react';


const Menu: NextPage = () => {

  const {data: session} = useSession();

  return (
    <>
      <Avatar name={session?.user?.name || ''} src={session?.user?.image || ''} />
      <Button colorScheme='blue' onClick={() => signOut()}>Logout</Button>
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
