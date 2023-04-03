import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ScaleLoader } from 'react-spinners';
import styles from './loader.module.scss';

interface Props {
  text?: string;
}

const Loader: NextPage<Props> = ({
  text = 'Playlist Master',
}) => {
  return (
    <div className={styles.loader}>
      <Heading 
        textAlign="right"
        size="xl" 
        mb={2} 
        color={'brand.500'}
        zIndex={1}
      >
        {text}
      </Heading>
      <ScaleLoader className={styles.loaderIcon} color="#42D760" loading={true} />
    </div>
  );
};

export default Loader;
