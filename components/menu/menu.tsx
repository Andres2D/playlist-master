import { Button, Heading, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import { signOut } from 'next-auth/react';
import styles from './menu.module.scss';
import { SettingsIcon, TriangleDownIcon, MoonIcon } from '@chakra-ui/icons';

interface Props {
  userName: string;
}

const MenuLayout: NextPage<Props> = ({userName}) => {
  return (
   <section className={styles.section}>
    <Heading 
      className={styles.title} 
      textAlign='center' 
      mb='10' 
      size='2xl'
      data-testid='message'
    >
      Hey <span className={styles.user}>{userName}</span>, <br />
      Ready to play?
    </Heading>
    <div className={styles.actions}>
      <div className={styles.action}>
        <Button
          className={styles.smallIcon}
          rightIcon={<SettingsIcon color='gray.400' focusable className={styles.settings} />}
          variant='unstyled'
          onClick={() => console.log('settings')}
        />
        <Text fontSize='3xl' textAlign='center'>Settings</Text>
      </div>
      
      <div className={styles.action}>
        <Button
          className={styles.bigIcon}
          rightIcon={<TriangleDownIcon color='brand.500' focusable className={styles.play} />}
          variant='unstyled'
          onClick={() => console.log('play')}
        />
        <Text fontSize='3xl' textAlign='center'>Play</Text>
      </div>
      
      <div className={styles.action}>
        <Button
          className={styles.smallIcon}
          rightIcon={<MoonIcon color='red.300' focusable className={styles.logout} />}
          variant='unstyled'
          onClick={() => console.log('logout')}
        />
        <Text fontSize='3xl' textAlign='center'>Logout</Text>
      </div>
      
    </div>
   </section>
  );
};

export default MenuLayout;
