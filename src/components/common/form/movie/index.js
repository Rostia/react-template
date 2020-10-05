import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addMovie, updateMovie } from 'actions/movies';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Button from 'components/common/button';
import categories from 'components/film/categories.json';
import styles from 'components/common/form/comonForm.module.scss';

const DEFAULT_STATE = {
  title: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  genres: [],
  release_date: '',
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
};

function getGanre(list) {
  return list.map((category) => ({ value: category, label: category }));
}

const FormMovie = ({
  setOpen,
  isEdit,
  movie,
  actionAddMovie,
  actionUpdateMovie,
}) => {
  const getMovie = () => (isEdit ? { ...movie, genres: getGanre(movie.genres) } : DEFAULT_STATE);
  const [film, setFilm] = useState(getMovie());

  const onChange = ({ target: { name, value } }) => {
    setFilm({ ...film, [name]: value });
  };

  const onChangeSelect = (selected) => {
    setFilm({ ...film, genres: selected });
  };

  const onSubmitHandler = (event) => {
    const { genres } = film;
    const resultMovie = {
      ...DEFAULT_STATE,
      ...film,
      runtime: +film.runtime,
      genres: genres.map(({ value }) => value),
    };

    if (!isEdit) {
      delete resultMovie.id;
      actionAddMovie(resultMovie);
    } else {
      actionUpdateMovie(resultMovie);
    }

    setFilm(DEFAULT_STATE);
    setOpen(event, false);
  };

  const onReset = () => setFilm(DEFAULT_STATE);

  const options = categories.map((category) => ({ value: category, label: category }));

  return (
    <section className={styles.componentContainer}>
      <div className={styles.modal}>
        <form onSubmit={onSubmitHandler}>
          <h2 className={styles.heading}>Add movie</h2>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="title">Title</label>
            <input
              className={styles.input}
              type="text"
              id="title"
              name="title"
              onChange={onChange}
              value={film.title}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="title">Tagline</label>
            <input
              className={styles.input}
              type="text"
              id="tagline"
              name="tagline"
              onChange={onChange}
              value={film.tagline}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="release_date">Release Date</label>
            <input
              type="date"
              className={styles.input}
              id="release_date"
              name="release_date"
              onChange={onChange}
              value={film.release_date}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="poster_path">Movie Url</label>
            <input
              type="text"
              className={styles.input}
              id="poster_path"
              name="poster_path"
              onChange={onChange}
              value={film.poster_path}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="genre">Genre</label>
            <Select
              id="genre"
              name="genre"
              options={options}
              onChange={onChangeSelect}
              isMulti
              value={film.genres}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="overview">Overview</label>
            <input
              type="text"
              className={styles.input}
              id="overview"
              name="overview"
              onChange={onChange}
              value={film.overview}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="runtime">Runtime</label>
            <input
              type="text"
              className={styles.input}
              id="runtime"
              name="runtime"
              value={film.runtime}
              onChange={onChange}
            />
          </div>
          <div className={styles.btnGroup}>
            <Button
              type="button"
              mode="outline"
              className={styles.btn}
              onClick={onReset}
            >
              Reset
            </Button>
            <Button
              type="submit"
              mode="active"
            >
              {isEdit ? 'Update' : 'Add'}
            </Button>
          </div>
        </form>
        <button className={styles.close} type="button" onClick={(event) => setOpen(event, false)}>&times;</button>
      </div>
    </section>
  );
};

FormMovie.propTypes = {
  setOpen: PropTypes.func.isRequired,
  actionAddMovie: PropTypes.func.isRequired,
  actionUpdateMovie: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    movie_url: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  }),
};

FormMovie.defaultProps = {
  isEdit: false,
  movie: undefined,
};

const mapDispatchToProps = (dispatch) => ({
  actionAddMovie: (data) => dispatch(addMovie(data)),
  actionUpdateMovie: (data) => dispatch(updateMovie(data)),
});

export default connect(undefined, mapDispatchToProps)(FormMovie);
