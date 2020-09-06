import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Logotype from 'components/common/logotype';
import Loupe from 'components/common/header/loupe';
import styles from './FilmDetail.module.scss';

const FilmDetail = ({
  film: {
    genres,
    title,
    overview,
    runtime,
    poster_path: posterPath,
    vote_average: voteAverage,
    release_date: releaseDate,
  },
}) => (
  <div className={styles.componentContainer}>
    <header className={styles.headerContainer}>
      <Logotype />
      <a href="?page=home">
        <Loupe className={styles.loupe} />
      </a>
    </header>

    <section className={styles.filmContainer}>
      <img src={posterPath} alt={title} className={styles.img} />
      <aside>
        <div className={cn(styles.row, styles.center)}>
          <h1 className={styles.title}>{title}</h1>
          <span className={styles.rating}>{voteAverage}</span>
        </div>
        <p className={styles.ganre}>{genres.join(', ')}</p>
        <div className={styles.row}>
          <span className={styles.year}>{releaseDate}</span>
          <span className={styles.time}>
            {`${+runtime} min`}
          </span>
        </div>
        <p className={styles.description}>{overview}</p>
      </aside>
    </section>
  </div>
);

FilmDetail.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    releaseDate: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
  }).isRequired,
};

export default FilmDetail;
