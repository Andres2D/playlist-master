import { NextPage } from 'next';
import { useSession, getSession } from 'next-auth/react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { lastValueFrom } from 'rxjs';
import { useMutation } from 'react-query';
import MenuLayout from '../../components/menu/menu';
import { getGame } from '../../services/game';
import { gameSlicesActions } from '../../store/game-slice';

const Menu: NextPage = () => {


  const {data: session} = useSession();
  const dispatch = useDispatch();

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

  // const game = await getGame(session?.accessToken).toPromise();

  return {
    props: { session }
  }
};

export default Menu;
