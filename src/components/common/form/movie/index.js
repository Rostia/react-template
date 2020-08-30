import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Button from 'components/common/button';
import categories from 'components/film/categories.json';
import uniqid from 'uniqid';
import styles from 'components/common/form/comonForm.module.scss';

const DEFAULT_STATE = {
  id: '',
  name: '',
  ganre: [],
  releaseDate: '',
  movieUrl: '',
  overview: '',
  runtime: '',
};

function getGanre(list) {
  return list.map((category) => ({ value: category, label: category }));
}

const FormMovie = ({
  onSubmit, setOpen, isEdit, movie,
}) => {
  const getMovie = () => (isEdit ? { ...movie, ganre: getGanre(movie.ganre) } : DEFAULT_STATE);
  const [film, setFilm] = useState(getMovie());

  const onChange = ({ target: { name, value } }) => {
    setFilm({ ...film, [name]: value });
  };

  const onChangeSelect = (selected) => {
    setFilm({ ...film, ganre: selected });
  };

  const onSubmitHandler = (event) => {
    const { ganre } = film;
    const resultMovie = {
      ...film,
      ganre: ganre.map(({ value }) => value),
    };

    if (!isEdit) {
      resultMovie.id = uniqid();
    }

    onSubmit(resultMovie);
    setFilm(DEFAULT_STATE);
    setOpen(false);
    event.preventDefault();
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
              name="name"
              onChange={onChange}
              value={film.name}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="releaseDate">Release Date</label>
            <input
              type="date"
              className={styles.input}
              id="releaseDate"
              name="releaseDate"
              onChange={onChange}
              value={film.releaseDate}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="movieUrl">Movie Url</label>
            <input
              type="text"
              className={styles.input}
              id="movieUrl"
              name="movieUrl"
              onChange={onChange}
              value={film.movieUrl}
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
              value={film.ganre}
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
              Add
            </Button>
          </div>
        </form>
        <button className={styles.close} type="button" onClick={() => setOpen(false)}>&times;</button>
      </div>
    </section>
  );
};

FormMovie.propTypes = {
  setOpen: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isEdit: PropTypes.bool,
  movie: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ganre: PropTypes.arrayOf(PropTypes.string),
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

export default FormMovie;
