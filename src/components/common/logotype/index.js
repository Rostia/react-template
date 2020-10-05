import React from 'react';
import { Link } from 'react-router-dom';
import styles from './logotype.module.scss';

const Logotype = () => (
  <Link to="/" className={styles.logotype}>Netflixroulet</Link>
);

export default Logotype;
