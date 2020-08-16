import React from 'react';
import FilmFilter from 'components/film/filter';
import FilmSort from 'components/film/sort';
import styles from './filmList.module.scss';

const FilmList = () => (
  <section className={styles.filmListContainer}>
    <header className={styles.headerContainer}>
      <FilmFilter />
      <FilmSort />
    </header>
  </section>
);

export default FilmList;
