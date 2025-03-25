import { useContext } from 'react';
import { Link } from 'react-router';
import styles from '/src/components/NavBar/navbar.module.css'

import { UserContext } from '../../contexts/UserContext';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <nav>
      {user ?
        <>
          <Link to='/sheets' className={styles.h1}>Character Tracker</Link>
          <Link to='/' onClick={handleSignOut} className={styles.a}>Sign Out</Link>
          <Link to='/equips' className={styles.a}>Equips</Link>
        </>
        :
        <>
          <Link to='/' className={styles.h1}>Character Tracker</Link>
          <Link to='/sign-in'>Sign In</Link>
          <Link to='/sign-up'>Sign Up</Link>
          <Link to='/equips'>Equips</Link>
        </>
      }
    </nav>
  );
};

export default NavBar;
