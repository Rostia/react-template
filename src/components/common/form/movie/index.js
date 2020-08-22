import React, { Component } from 'react';
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

class FormMovie extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMovie();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeSelect = this.onChangeSelect.bind(this);
    this.onReset = this.onReset.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  onChangeSelect(selected) {
    this.setState({
      ganre: selected,
    });
  }

  onSubmit(event) {
    const { onSubmit, setOpen, isEdit } = this.props;
    const { ganre } = this.state;
    const resultMovie = {
      ...this.state,
      ganre: ganre.map(({ value }) => value),
    };

    if (!isEdit) {
      resultMovie.id = uniqid();
    }

    onSubmit(resultMovie);
    this.setState(DEFAULT_STATE);
    setOpen(false);
    event.preventDefault();
  }

  onReset() {
    this.setState(DEFAULT_STATE);
  }

  getMovie() {
    const { isEdit, movie } = this.props;

    return isEdit ? { ...movie, ganre: getGanre(movie.ganre) } : DEFAULT_STATE;
  }

  render() {
    const { setOpen } = this.props;
    const {
      name,
      ganre,
      releaseDate,
      movieUrl,
      overview,
      runtime,
    } = this.state;

    const options = categories.map((category) => ({ value: category, label: category }));

    return (
      <section className={styles.componentContainer}>
        <div className={styles.modal}>
          <form onSubmit={this.onSubmit}>
            <h2 className={styles.heading}>Add movie</h2>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="title">Title</label>
              <input
                className={styles.input}
                type="text"
                id="title"
                name="name"
                onChange={this.onChange}
                value={name}
              />
            </div>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="releaseDate">Release Date</label>
              <input
                type="date"
                className={styles.input}
                id="releaseDate"
                name="releaseDate"
                onChange={this.onChange}
                value={releaseDate}
              />
            </div>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="movieUrl">Movie Url</label>
              <input
                type="text"
                className={styles.input}
                id="movieUrl"
                name="movieUrl"
                onChange={this.onChange}
                value={movieUrl}
              />
            </div>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="genre">Genre</label>
              <Select
                id="genre"
                name="genre"
                options={options}
                onChange={this.onChangeSelect}
                isMulti
                value={ganre}
              />
            </div>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="overview">Overview</label>
              <input
                type="text"
                className={styles.input}
                id="overview"
                name="overview"
                onChange={this.onChange}
                value={overview}
              />
            </div>
            <div className={styles.formControll}>
              <label className={styles.label} htmlFor="runtime">Runtime</label>
              <input
                type="text"
                className={styles.input}
                id="runtime"
                name="runtime"
                value={runtime}
                onChange={this.onChange}
              />
            </div>
            <div className={styles.btnGroup}>
              <Button
                type="button"
                mode="outline"
                className={styles.btn}
                onClick={this.onReset}
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
  }
}

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
