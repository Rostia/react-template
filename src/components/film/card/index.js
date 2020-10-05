import React from 'react';
import PropTypes from 'prop-types';
import FilmControl from 'components/film/control';
import styles from './FilmCard.module.scss';

const FilmCard = ({
  film,
}) => {
  const {
    id,
    title,
    genres,
    release_date: releaseDate,
    poster_path: posterPath,
  } = film;
  return (
    <div className={styles.cardContained}>
      <a href={`?page=film&id=${id}`} className={styles.card}>
        <img src={posterPath} alt="Film" className={styles.cardImage} />
        <div className={styles.row}>
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={styles.cardYear}>{releaseDate}</span>
        </div>
        <span className={styles.cardGanre}>{genres.join(', ')}</span>
      </a>
      <FilmControl movie={film} />
    </div>

  );
};

FilmCard.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    poster_path: PropTypes.string,
  }).isRequired,
};

export default FilmCard;
