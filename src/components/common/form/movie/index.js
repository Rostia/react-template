import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { addMovie, updateMovie } from 'actions/movies';
import PropTypes from 'prop-types';
import Select from 'react-select';
import Button from 'components/common/button';
import categories from 'components/film/categories.json';
import { useFormik } from 'formik';
import styles from 'components/common/form/comonForm.module.scss';

const schema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  tagline: Yup.string('Tagline should be string'),
  vote_average: Yup.number('Vote average should be number'),
  vote_count: Yup.number('Vote count should be number'),
  genres: Yup.array(Yup.object()).required('Genre is required'),
  release_date: Yup.date('Release date should be date'),
  poster_path: Yup.string().url('Movie Url should be URL').required('Movie Url is required'),
  overview: Yup.string().required('Overview is required'),
  budget: Yup.number('Budget should be number'),
  revenue: Yup.number('Revenue should be number'),
  runtime: Yup.number('Runtime should be number').required('Runtime is required'),
});

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
  const initialFormik = getMovie();

  const formik = useFormik({
    initialValues: {
      ...initialFormik,
    },
    onSubmit: (values) => {
      const resultMovie = {
        ...DEFAULT_STATE,
        ...values,
        runtime: +values.runtime,
        genres: values.genres.map(({ value }) => value),
      };

      if (!isEdit) {
        delete resultMovie.id;
        actionAddMovie(resultMovie);
      } else {
        actionUpdateMovie(resultMovie);
      }

      formik.handleReset();
      setOpen(false);
    },
    validationSchema: schema,
  });

  const onReset = () => formik.handleReset();

  const options = categories.map((category) => ({ value: category, label: category }));

  const { errors } = formik;

  return (
    <section className={styles.componentContainer}>
      <div className={styles.modal}>
        <form onSubmit={formik.handleSubmit}>
          <h2 className={styles.heading}>Add movie</h2>
          <ul className={styles.errorList}>
            {Object.values(errors)?.map((error) => <li key={error}>{error}</li>)}
          </ul>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="title">Title</label>
            <input
              className={styles.input}
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="title">Tagline</label>
            <input
              className={styles.input}
              type="text"
              id="tagline"
              name="tagline"
              onChange={formik.handleChange}
              value={formik.values.tagline}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="release_date">Release Date</label>
            <input
              type="date"
              className={styles.input}
              id="release_date"
              name="release_date"
              onChange={formik.handleChange}
              value={formik.values.release_date}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="poster_path">Movie Url</label>
            <input
              type="text"
              className={styles.input}
              id="poster_path"
              name="poster_path"
              onChange={formik.handleChange}
              value={formik.values.poster_path}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="genre">Genre</label>
            <Select
              id="genre"
              name="genre"
              options={options}
              isMulti
              // value={film.genres}
              // onChange={onChangeSelect}
              onChange={(selected) => {
                formik.setFieldValue('genres', selected);
              }}
              value={formik.values.genres}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="overview">Overview</label>
            <input
              type="text"
              className={styles.input}
              id="overview"
              name="overview"
              onChange={formik.handleChange}
              value={formik.values.overview}
            />
          </div>
          <div className={styles.formControll}>
            <label className={styles.label} htmlFor="runtime">Runtime</label>
            <input
              type="text"
              className={styles.input}
              id="runtime"
              name="runtime"
              onChange={formik.handleChange}
              value={formik.values.runtime}
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
        <button className={styles.close} type="button" onClick={() => setOpen(false)}>&times;</button>
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
