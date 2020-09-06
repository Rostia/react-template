import React from 'react';
import { connect } from 'react-redux';
import { sortingByReleaseDate, sortingByRating } from 'actions/sorting';
import {
  SORTING_RELEASE_DATE,
} from 'constants/ActionTypes';
import PropTypes from 'prop-types';
import styles from './FilmSort.module.scss';

const FilmSort = ({
  sorting,
  actionSortingByReleaseDate,
  actionSortingByRating,
}) => (
  <div className={styles.filmSortContainer}>
    <span className={styles.title}>Sort: </span>
    <button
      className={styles.sortBtn}
      type="button"
      onClick={() => {
        if (sorting === SORTING_RELEASE_DATE) {
          actionSortingByRating();
        } else {
          actionSortingByReleaseDate();
        }
      }}
    >
      {sorting === SORTING_RELEASE_DATE ? 'Release date' : 'Rating'}
    </button>
  </div>
);

FilmSort.propTypes = {
  sorting: PropTypes.string.isRequired,
  actionSortingByReleaseDate: PropTypes.func.isRequired,
  actionSortingByRating: PropTypes.func.isRequired,
};

const mapStateToProps = ({ sorting }) => ({
  sorting,
});

const mapDispatchToProps = (dispatch) => ({
  actionSortingByReleaseDate: () => dispatch(sortingByReleaseDate()),
  actionSortingByRating: () => dispatch(sortingByRating()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmSort);
