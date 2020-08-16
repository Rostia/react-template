import React from 'react';
import Button from 'components/common/button';
import Logotype from 'components/common/logotype';
import styles from './header.module.scss';

const Header = () => (
  <section className={styles.headerComponent}>
    <header className={styles.headerContainer}>
      <Logotype />
      <Button type="button">+ Add movie</Button>
    </header>
    <div className={styles.contentContainer}>
      <h1 className={styles.header}>Find Your Movie</h1>
      <div className={styles.searchContainer}>
        <input type="text" className={styles.searchInput} />
        <Button type="button" mode="active">Search</Button>
      </div>
    </div>
  </section>
);

export default Header;
