import { 
  Avatar, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  DrawerBody,
  useDisclosure, 
  Heading
} from '@chakra-ui/react';
import { 
  TriangleDownIcon, 
  MoonIcon, 
  HamburgerIcon 
} from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styles from './navbar.module.scss';
import { loaderSliceActions } from '../../store/loader-slice';

interface Props {
  userName: string;
  image: string;
}

const Navbar: NextPage<Props> = ({userName, image}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const router = useRouter();

  const handlePlayAction = () => {
    if(router.pathname === '/menu') {
      dispatch(loaderSliceActions.setLoaderState({loading: true}));
      router.push('/game');
    }
    onClose();
  };

  const handleMenuAction = () => {
    router.push('/menu');
    onClose();
  };

  return (
    <>
      <nav className={styles.navigator}>
        <Avatar 
          className={styles.profile}
          name={userName}
          borderColor='gray'
          size='lg'
          src={image} 
          onClick={onOpen} 
        />
      </nav>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent background='teal'>
          <DrawerCloseButton />
          <DrawerBody 
            display='flex' 
            flexDirection='column' 
            alignItems='center'
          >
            <Avatar 
              marginTop='20'
              mb='10'
              className={styles.profile}
              name={userName}
              borderColor='blackAlpha'
              size='xl'
              src={image}
            />
            <Heading color='white' textAlign='center' mb='5' size='md'>Hola</Heading>
            <Heading color='ghostwhite' textAlign='center' mb='10' size='md'>{userName}</Heading>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<TriangleDownIcon 
              className={styles.play} />} 
              colorScheme='brand'
              onClick={handlePlayAction}
              variant='solid'
            >
              Play
            </Button>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<HamburgerIcon />} 
              colorScheme='blackAlpha'
              onClick={handleMenuAction}
              variant='solid'
            >
              Menu
            </Button>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<MoonIcon />} 
              colorScheme='red' 
              variant='solid'
              onClick={() => signOut()}
            >
              Logout
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Navbar;
