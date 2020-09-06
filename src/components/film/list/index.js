import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies } from 'actions/movies';
import { SORTING_RELEASE_DATE } from 'constants/ActionTypes';
import FilmFilter from 'components/film/filter';
import FilmSort from 'components/film/sort';
import FilmCard from 'components/film/card';
import ResultCount from 'components/film/result-count';
import { SearchContext } from 'components/common/header';
import styles from './filmList.module.scss';

const FilmList = ({
  movies,
  actionFetchMovies,
  sorting,
  activeGanre,
}) => {
  useEffect(() => {
    const options = {
      sortBy: sorting === SORTING_RELEASE_DATE ? 'release_date' : 'vote_average',
    };

    if (activeGanre) {
      options.filter = [activeGanre];
    }

    actionFetchMovies(options);
  }, [actionFetchMovies, sorting, activeGanre]);

  return (
    <SearchContext.Consumer>
      {
        ({ search }) => {
          const filmsCount = movies.data.length;

          return (
            <section className={styles.filmListContainer}>
              <header className={styles.headerContainer}>
                <FilmFilter />
                <FilmSort />
              </header>
              <ResultCount count={filmsCount} />
              <main className={styles.contentContainer}>
                {
                  filmsCount > 0
                    ? movies.data.map((film) => (
                      <FilmCard
                        film={film}
                        key={film.id}
                      />
                    ))
                    : <p className={styles.noResult}>No Movie Found</p>
                }
              </main>
            </section>

          );
        }
      }
    </SearchContext.Consumer>
  );
};

FilmList.propTypes = {
  movies: PropTypes.objectOf(PropTypes.any).isRequired,
  actionFetchMovies: PropTypes.func.isRequired,
  sorting: PropTypes.string.isRequired,
  activeGanre: PropTypes.string,
};

FilmList.defaultProps = {
  activeGanre: undefined,
};

const mapStateToProps = ({ movies, sorting, ganre }) => ({
  movies,
  sorting,
  activeGanre: ganre.active,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchMovies: (options) => dispatch(fetchMovies(options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
