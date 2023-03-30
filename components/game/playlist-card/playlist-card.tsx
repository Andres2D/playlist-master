import { 
  Card, 
  CardBody, 
  Image, 
  Heading, 
  Text, 
  CardFooter, 
  Button, 
  StatHelpText,
  StatArrow,
  Stat,
  StatLabel
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaMusic } from 'react-icons/fa';
import { NextPage } from 'next';
import { useDispatch } from 'react-redux';
import styles from './playlist-card.module.scss';
import { PlaylistSelection } from '../../../interfaces/playlist';
import { loaderSliceActions } from '../../../store/loader-slice';

interface Props {
  playlist: PlaylistSelection
}

const PlaylistCard: NextPage<Props> = ({playlist}) => {
  const route = useRouter();
  const dispatch = useDispatch();
  
  const handlePlayClick = () => {
    dispatch(loaderSliceActions.setLoaderState({loading: true}));
    route.push(`game/${playlist.id}`);
  };

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
        <Stat>
          <StatLabel fontWeight='extrabold' fontSize='xl'>Best score</StatLabel>
          <StatHelpText fontWeight='extrabold' fontSize='large'>
            <StatArrow type={playlist.bestScore > 50 ? 'increase' : 'decrease'} />
              {playlist.bestScore} %
          </StatHelpText>
        </Stat>
      </CardBody>
      <CardFooter>
        <Button 
          variant='solid' 
          w='100%' 
          colorScheme={'blackAlpha'} 
          leftIcon={<FaMusic />}
          onClick={handlePlayClick}
        >
          Play
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PlaylistCard;
