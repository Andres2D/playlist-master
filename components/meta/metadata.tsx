import type { NextPage } from 'next';
import Head from 'next/head';

interface Props {
  title?: string;
  description?: string;
}

const Metadata: NextPage<Props> = ({title = 'Playlist Master', description = 'Playlist Master'}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta 
        name='description'
        content={description}
      />
    </Head>
  )
}

export default Metadata;
