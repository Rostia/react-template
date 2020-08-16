import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import styles from './FilmSort.module.scss';

const FilmSort = ({
  sort,
  setSort,
}) => (
  <div className={styles.filmSortContainer}>
    <span className={styles.title}>Sort: </span>
    <button
      className={cn(styles.sortBtn, {
        [styles.active]: sort,
      })}
      type="button"
      onClick={() => setSort(!sort)}
    >
      Release date
    </button>
  </div>
);

FilmSort.propTypes = {
  sort: PropTypes.bool.isRequired,
  setSort: PropTypes.func.isRequired,
};

export default FilmSort;
