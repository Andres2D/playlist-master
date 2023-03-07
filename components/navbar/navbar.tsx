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
import { SettingsIcon, TriangleDownIcon, MoonIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';
import { NextPage } from 'next';
import styles from './navbar.module.scss';

interface Props {
  userName: string;
  image: string;
}

const Navbar: NextPage<Props> = ({userName, image}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        <DrawerContent background='darkgrey'>
          <DrawerCloseButton />
          <DrawerBody 
            display='flex' 
            flexDirection='column' 
            alignItems='center'
          >
            <Avatar 
              marginTop='20'
              className={styles.profile}
              name={userName}
              borderColor='blackAlpha'
              size='2xl'
              src={image}
            />
            <Heading className={styles.title} color='black' textAlign='center' mb='10' size='3xl'>{userName}</Heading>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<SettingsIcon />} 
              colorScheme='blackAlpha' 
              variant='solid'
            >
              Settings
            </Button>
            <Button 
              size='lg' 
              className={styles.actions} 
              rightIcon={<TriangleDownIcon 
              className={styles.play} />} 
              colorScheme='brand' 
              color='black' 
              variant='solid'
            >
              Play
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
