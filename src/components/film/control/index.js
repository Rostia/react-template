import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cardStyles from 'components/film/card/FilmCard.module.scss';
import DeleteMovie from 'components/common/form/deleteMovie';
import FormMovie from 'components/common/form/movie';
import styles from './FilmControl.module.scss';

const FilmControl = ({ movie }) => {
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
                    movieId={movie.id}
                  />
                )
              }
              {
                openEditForm && (
                  <FormMovie
                    setOpen={(event) => stopPreventDefault(event, () => setopenEditForm(false))}
                    isEdit
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
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    ganre: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    movie_url: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }).isRequired,
};

export default FilmControl;
