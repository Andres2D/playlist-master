import { 
  Card, 
  CardBody, 
  Image, 
  Heading, 
  Text, 
  CardFooter, 
  Button 
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaMusic } from 'react-icons/fa';
import { NextPage } from 'next';
import styles from './playlist-card.module.scss';
import { PlaylistSelection } from '../../../interfaces/playlist';

interface Props {
  playlist: PlaylistSelection
}

const PlaylistCard: NextPage<Props> = ({playlist}) => {
  const route = useRouter();

  return (
    <Card maxW='sm' colorScheme={'facebook'}>
      <CardBody className={styles.card}>
        <Image
          src={playlist.image}
          alt={playlist.name}
          borderRadius='lg'
        />
        <Heading size='md' mt='2'>{playlist.name}</Heading>
        <Text
          mt='2'
          dangerouslySetInnerHTML={{ __html: playlist.description}} />
      </CardBody>
      <CardFooter>
        <Button 
          variant='solid' 
          w='100%' 
          colorScheme={'brand'} 
          leftIcon={<FaMusic />}
          onClick={() => route.push(`game/${playlist.id}`)}
        >
          Play
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaylistCard;
