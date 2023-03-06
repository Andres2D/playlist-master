import { Avatar, Button } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useSession, signOut } from 'next-auth/react';


const Menu: NextPage = () => {

  const {data: session} = useSession();

  return (
    <>
      <Avatar name={session?.user?.name || ''} src={session?.user?.image || ''} />
      <Button colorScheme='blue' onClick={() => signOut()}>Logout</Button>
    </>
  );
};

export default Menu;
