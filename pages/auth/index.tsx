import { NextPage } from 'next';
import styles from './auth.module.scss';
import AuthLayout from '../../components/auth/auth';

const Auth: NextPage = () => {
  return (
    <section className={styles.auth}>
      <AuthLayout />
    </section>
  );
};

export default Auth;
