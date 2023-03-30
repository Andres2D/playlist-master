import { 
  Avatar, 
  Drawer, 
  DrawerOverlay, 
  DrawerContent, 
  DrawerCloseButton, 
  DrawerBody,
  useDisclosure, 
  Heading,
  useColorMode
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
  const { colorMode, toggleColorMode } = useColorMode()

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

  const bgNavbar = () => {
    return colorMode === 'light' ? 'teal' : 'gray.900';
  }

  return (
    <>
      <nav className={styles.navigator}>
        <Avatar 
          className={styles.profile}
          name={userName}
          borderColor='teal'
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
        <DrawerContent backgroundColor={bgNavbar}>
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
              borderColor='teal'
              size='xl'
              src={image}
            />
            <Heading color='White' textAlign='center' mb='5' size='md'>Hola</Heading>
            <Heading color='White' textAlign='center' mb='10' size='md'>{userName}</Heading>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<TriangleDownIcon 
              className={styles.play} />} 
              colorScheme='blackAlpha'
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
              onClick={toggleColorMode}
              colorScheme='blackAlpha'
              className={styles.actions} 
              rightIcon={<MoonIcon />} 
              size='lg'
              variant='solid'
              >
              Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
            </Button>
            <Button 
              size='lg' 
              className={styles.actions} 
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
