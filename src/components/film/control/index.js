import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cardStyles from 'components/film/card/FilmCard.module.scss';
import DeleteMovie from 'components/common/form/deleteMovie';
import FormMovie from 'components/common/form/movie';
import styles from './FilmControl.module.scss';

const FilmControl = ({ deleteMovie, movie, editMovie }) => {
  const [open, setOpen] = useState(false);
  const [openDeleteForm, setOpenDeleteForm] = useState(false);
  const [openEditForm, setopenEditForm] = useState(false);

  const stopPreventDefault = (event, callBack) => {
    event.preventDefault();
    callBack();
  };

  return (
    <>
      {
        !open
          ? (
            <button
              type="button"
              className={cn(styles.actionButton, cardStyles.actionButton)}
              onClick={(event) => stopPreventDefault(event, () => setOpen(!open))}
            >
              <span className={styles.dotes}>...</span>
            </button>
          )
          : (
            <section className={styles.componentWrapper}>
              <button
                type="button"
                className={styles.btn}
                onClick={(event) => stopPreventDefault(event, () => setopenEditForm(true))}
              >
                Edit
              </button>
              <button
                type="button"
                className={styles.btn}
                onClick={(event) => stopPreventDefault(event, () => setOpenDeleteForm(true))}
              >
                Delete
              </button>
              <button
                type="button"
                className={styles.close}
                onClick={(event) => stopPreventDefault(event, () => setOpen(!open))}
              >
                &times;
              </button>
              {
                openDeleteForm && (
                  <DeleteMovie
                    setOpen={(event) => stopPreventDefault(event, () => setOpenDeleteForm(false))}
                    deleteMovie={deleteMovie}
                    movieId={movie.id}
                  />
                )
              }
              {
                openEditForm && (
                  <FormMovie
                    setOpen={(event) => stopPreventDefault(event, () => setopenEditForm(false))}
                    isEdit
                    onSubmit={editMovie}
                    movie={movie}
                  />
                )
              }
            </section>
          )
      }
    </>
  );
};

FilmControl.propTypes = {
  deleteMovie: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ganre: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    movie_url: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
};

export default FilmControl;
