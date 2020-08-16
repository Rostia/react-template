import React from 'react';
import { filterList } from 'mock/film';
import styles from './filmFilter.module.scss';

const FilmFilter = () => (
  <ul className={styles.filmFilterContainer}>
    {filterList.map((filter) => (
      <li
        className={styles.filterItem}
        key={filter}
      >
        <a
          href={`?filter=${filter}`}
          className={styles.link}
        >
          {filter}
        </a>
      </li>
    ))}
  </ul>
);

export default FilmFilter;
