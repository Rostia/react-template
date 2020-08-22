import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/common/button';
import styles from 'components/common/form/comonForm.module.scss';
import componentStyles from './DeleteMovie.module.scss';

const DeleteMovie = ({
  setOpen,
  deleteMovie,
  movieId,
}) => (
  <section className={styles.componentContainer}>
    <div className={cn(styles.modal, componentStyles.modal)}>
      <h2 className={styles.heading}>DELETE MOVIE</h2>
      <p className={styles.text}>Are you shure you want to delete this movie?</p>
      <Button
        type="button"
        mode="active"
        onClick={() => {
          deleteMovie(movieId);
          setOpen(false);
        }}
        className={componentStyles.btn}
      >
        Confirm
      </Button>
      <button className={styles.close} type="button" onClick={() => setOpen(false)}>&times;</button>
    </div>
  </section>
);

DeleteMovie.propTypes = {
  setOpen: PropTypes.func.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
};

export default DeleteMovie;
