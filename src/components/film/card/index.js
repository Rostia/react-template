import React from 'react';
import PropTypes from 'prop-types';
import FilmControl from 'components/film/control';
import styles from './FilmCard.module.scss';

const FilmCard = ({
  film,
  deleteFilm,
  editMovie,
}) => {
  const {
    id,
    name,
    ganre,
    releaseDate,
  } = film;
  return (
    <a href={`?page=film&id=${id}`} className={styles.cardWrapper}>
      <img src="https://picsum.photos/400/300" alt="Film" className={styles.cardImage} />
      <div className={styles.row}>
        <h3 className={styles.cardTitle}>{name}</h3>
        <span className={styles.cardYear}>{releaseDate}</span>
      </div>
      {ganre.map((item) => <span className={styles.cardGanre} key={item}>{item}</span>)}
      <FilmControl deleteMovie={deleteFilm} editMovie={editMovie} movie={film} />
    </a>
  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    releaseDate: PropTypes.string,
    ganre: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  deleteFilm: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default FilmCard;
