import { NextPage } from 'next';
import IntroLayout from '../../components/intro/intro';
import Metadata from '../../components/meta/metadata';

const Intro: NextPage = () => {

  return (
    <>
      <Metadata title='Welcome | Playlist Master' description='Welcome to Playlist Master' />
      <IntroLayout />
    </>
  );
};

export default Intro;
