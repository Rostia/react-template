import React from 'react';
import Logotype from 'components/common/logotype';
import Footer from 'components/common/footer';
import styles from './NotFound.module.scss';

const NotFound = () => (
  <main className={styles.bgContainer}>
    <Logotype />
    <section className={styles.pageContainer}>
      <h1 className={styles.heading}>Page not found</h1>
      <h2 className={styles.code}>404</h2>
      <a className={styles.link} href="/">Go back to home</a>
    </section>
    <Footer />
  </main>
);

export default NotFound;
