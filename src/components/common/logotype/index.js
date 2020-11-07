import React from 'react';
import Link from 'next/link';
import styles from './logotype.module.scss';

const Logotype = () => (
  <Link href="/" ><a className={styles.logotype}>Netflixroulet</a></Link>
);

export default Logotype;
