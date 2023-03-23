import { NextPage } from 'next';
import { getSession } from 'next-auth/react';
import SummaryLayout from '../../components/summary/summary';
import Metadata from '../../components/meta/metadata';

const Summary: NextPage = () => {
  return (
    <>
      <Metadata title={`Summary`} />
      <SummaryLayout />
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const session = await getSession({ req: context.req });
  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default Summary;
