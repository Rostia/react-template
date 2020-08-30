import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import Logotype from 'components/common/logotype';
import Loupe from 'components/common/header/loupe';
import styles from './FilmDetail.module.scss';

const FilmDetail = ({
  film: {
    ganre,
    name,
    overview,
    releaseDate,
    runtime,
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
      <img src="https://picsum.photos/400/500" alt="Film" className={styles.img} />
      <aside>
        <div className={cn(styles.row, styles.center)}>
          <h1 className={styles.title}>{name}</h1>
          <span className={styles.rating}>4.3</span>
        </div>
        <p className={styles.ganre}>{ganre.join(', ')}</p>
        <div className={styles.row}>
          <span className={styles.year}>{releaseDate}</span>
          <span className={styles.time}>
            {runtime}
            min
          </span>
        </div>
        <p className={styles.description}>{overview}</p>
      </aside>
    </section>
  </div>
);

FilmDetail.propTypes = {
  film: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ganre: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    movie_url: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
    releaseDate: PropTypes.string,
  }).isRequired,
};

export default FilmDetail;
