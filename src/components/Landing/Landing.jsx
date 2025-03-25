import { Link } from 'react-router'
import styles from './landing.module.css'

const Landing = () => {
  return (
    <main>
      <h1 className={styles.header}>Welcome To 
        <div className={styles.title}>Character Tracker</div>
      </h1>
      <p>
        <Link className={styles.link} to='/sign-up'>Sign Up</Link> to create an account!
        <p></p>
        <Link className={styles.link} to='sign-in'>Sign In</Link> if you already own an account!
      </p>
    </main>
  );
};

export default Landing;
