import React from 'react';
import { connect } from 'react-redux';
import { deleteMovie } from 'actions/movies';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Button from 'components/common/button';
import styles from 'components/common/form/comonForm.module.scss';
import componentStyles from './DeleteMovie.module.scss';

const DeleteMovie = ({
  setOpen,
  actionDeleteMovie,
  movieId,
}) => (
  <section className={styles.componentContainer}>
    <div className={cn(styles.modal, componentStyles.modal)}>
      <h2 className={styles.heading}>DELETE MOVIE</h2>
      <p className={styles.text}>Are you shure you want to delete this movie?</p>
      <Button
        type="button"
        mode="active"
        onClick={(event) => {
          actionDeleteMovie(movieId);
          setOpen(event, false);
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
  actionDeleteMovie: PropTypes.func.isRequired,
  movieId: PropTypes.string.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  actionDeleteMovie: (id) => dispatch(deleteMovie(id)),
});

export default connect(undefined, mapDispatchToProps)(DeleteMovie);
