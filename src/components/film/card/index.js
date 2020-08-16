import React from 'react';
import PropTypes from 'prop-types';
import styles from './FilmCard.module.scss';

const FilmCard = ({
  film: {
    name,
    year,
    ganre,
  },
}) => (
  <section className={styles.cardWrapper}>
    <img src="https://picsum.photos/400/300" alt="Film" className={styles.cardImage} />
    <div className={styles.row}>
      <h3 className={styles.cardTitle}>{name}</h3>
      <span className={styles.cardYear}>{year}</span>
    </div>
    <p className={styles.cardGanre}>{ganre}</p>

    <button type="button" className={styles.actionButton}>
      <span className={styles.dotes}>...</span>
    </button>
  </section>
);

FilmCard.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.string,
    ganre: PropTypes.string,
  }).isRequired,
};

export default FilmCard;
