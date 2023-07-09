import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}><h3><span className={styles.logo_simbol}>&lt;/&gt;</span>Con3kta</h3></div>
      <button className={styles.button}>Login</button>
    </div>
  );
};

export default Navbar;
