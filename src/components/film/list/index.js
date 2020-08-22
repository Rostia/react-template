import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilmFilter from 'components/film/filter';
import FilmSort from 'components/film/sort';
import FilmCard from 'components/film/card';
import ResultCount from 'components/film/result-count';
import { SearchContext } from 'components/common/header';
import categories from 'components/film/categories.json';
import styles from './filmList.module.scss';

const getFilms = (films, ganre, sort, search) => {
  let listFilm = films;

  if (search) {
    listFilm = listFilm.filter(
      (item) => item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1,
    );
  }

  if (ganre) {
    listFilm = listFilm.filter((film) => film?.ganre?.indexOf(ganre) !== -1);
  }

  if (sort) {
    listFilm = listFilm.sort((a, b) => +a.releaseDate - +b.releaseDate);
  } else {
    listFilm = listFilm.sort((a, b) => +b.releaseDate - +a.releaseDate);
  }

  return listFilm;
};

const FilmList = ({ data, deleteFilm, editMovie }) => {
  const [activeGanre, setactiveGanre] = useState(undefined);
  const [sort, setSort] = useState(false);

  return (

    <SearchContext.Consumer>
      {
        ({ search }) => {
          const films = getFilms(data, activeGanre, sort, search);
          const filmsCount = films.length;

          return (
            <section className={styles.filmListContainer}>
              <header className={styles.headerContainer}>
                <FilmFilter
                  filterList={categories}
                  activeGanre={activeGanre}
                  setactiveGanre={setactiveGanre}
                />
                <FilmSort sort={sort} setSort={setSort} />
              </header>
              <ResultCount count={filmsCount} />
              <main className={styles.contentContainer}>
                {
                  filmsCount > 0
                    ? films.map((film) => (
                      <FilmCard
                        film={film}
                        key={film.id}
                        deleteFilm={deleteFilm}
                        editMovie={editMovie}
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ganre: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string,
    movie_url: PropTypes.string,
    overview: PropTypes.string,
    runtime: PropTypes.number,
  })).isRequired,
  deleteFilm: PropTypes.func.isRequired,
  editMovie: PropTypes.func.isRequired,
};

export default FilmList;
