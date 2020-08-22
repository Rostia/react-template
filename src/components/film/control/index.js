import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import cardStyles from 'components/film/card/FilmCard.module.scss';
import DeleteMovie from 'components/common/form/deleteMovie';
import FormMovie from 'components/common/form/movie';
import styles from './FilmControl.module.scss';

class FilmControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openDeleteForm: false,
      openEditForm: false,
    };
  }

  render() {
    const { open, openDeleteForm, openEditForm } = this.state;
    const { deleteMovie, movie, editMovie } = this.props;

    return (
      <>
        {
          !open
            ? (
              <button
                type="button"
                className={cn(styles.actionButton, cardStyles.actionButton)}
                onClick={() => this.setState({ open: !open })}
              >
                <span className={styles.dotes}>...</span>
              </button>
            )
            : (
              <section className={styles.componentWrapper}>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => this.setState({ openEditForm: true })}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className={styles.btn}
                  onClick={() => this.setState({ openDeleteForm: true })}
                >
                  Delete
                </button>
                <button
                  type="button"
                  className={styles.close}
                  onClick={() => this.setState({ open: !open })}
                >
                  &times;
                </button>
                {
                  openDeleteForm && (
                    <DeleteMovie
                      setOpen={() => this.setState({ openDeleteForm: false })}
                      deleteMovie={deleteMovie}
                      movieId={movie.id}
                    />
                  )
                }
                {
                  openEditForm && (
                    <FormMovie
                      setOpen={() => this.setState({ openEditForm: false })}
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
  }
}

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
