import React, { useState } from 'react';
import { sortList } from 'mock/film';
import styles from './FilmSort.module.scss';

const FilmSort = () => {
  const [active, setActive] = useState(sortList[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.filmSortContainer}>
      <span className={styles.title}>Sort: </span>
      <div className={styles.sortWrapper}>
        <span className={styles.active} onClick={() => setOpen(!open)}>{active}</span>
        {
          open && (
            <ul className={styles.list}>
              {sortList.map(item => (
                <li
                  key={item}
                  onClick={() => setActive(item)}
                  className={styles.listItem}
                >
                  {item}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default FilmSort;
