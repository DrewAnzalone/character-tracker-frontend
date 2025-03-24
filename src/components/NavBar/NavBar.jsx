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
    <>
    <nav className={styles.nav}>
      <h1 className={styles.h1}>Character Tracker</h1>
      {user ?
      
        <ul className={styles.ul}>
          <li>Welcome, {user.username}</li>
          <li><Link to='/sheets'>Dashboard</Link></li>
          <li><Link to='/' onClick={handleSignOut}>Sign Out</Link></li>
          <li><Link to='/equips'>Equips</Link></li>
        </ul>
        :
        <ul className={styles.navbar}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/sign-in'>Sign In</Link></li>
          <li><Link to='/sign-up'>Sign Up</Link></li>
        </ul>
      }
    </nav>
      </>
  );
};

export default NavBar;
