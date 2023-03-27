import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ScaleLoader } from 'react-spinners';
import styles from './loader.module.scss';

interface Props {
  text?: string;
  loading?: boolean;
}

const Loader: NextPage<Props> = ({
  text = 'Playlist Master',
  loading = false,
}) => {
  return (
    <div className={styles.loader}>
      <Heading textAlign="right" size="xl" mb={2} color="#36d7b7">
        {text}
      </Heading>
      <ScaleLoader color="#36d7b7" loading={loading} />
    </div>
  );
};

export default Loader;
