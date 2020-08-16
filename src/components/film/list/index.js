import React, { useState } from 'react';
import FilmFilter from 'components/film/filter';
import FilmSort from 'components/film/sort';
import FilmCard from 'components/film/card';
import ResultCount from 'components/film/result-count';
import { SearchContext } from 'components/common/header';
import mockFilms from './mock.json';
import styles from './filmList.module.scss';

const getFilms = (films, ganre, sort, search) => {
  let listFilm = films;

  if (search) {
    listFilm = listFilm.filter((item) => {
      return item.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) !== -1
    });
  }

  if (ganre) {
    listFilm = listFilm.filter((film) => film.ganre === ganre);
  }

  if (sort) {
    listFilm = listFilm.sort((a, b) => a.year - b.year);
  } else {
    listFilm = listFilm.sort((a, b) => b.year - a.year);
  }

  return listFilm;
};

const FilmList = () => {
  const [activeGanre, setactiveGanre] = useState(undefined);
  const [sort, setSort] = useState(false);

  const filterList = [...new Set(mockFilms.reduce((acc, item) => [...acc, item.ganre], []))];
  return (

    <SearchContext.Consumer>
      {
        ({ search }) => {
          const films = getFilms(mockFilms, activeGanre, sort, search);
          const filmsCount = films.length;

          return (
            <section className={styles.filmListContainer}>
              <header className={styles.headerContainer}>
                <FilmFilter
                  filterList={filterList.sort()}
                  activeGanre={activeGanre}
                  setactiveGanre={setactiveGanre}
                />
                <FilmSort sort={sort} setSort={setSort} />
              </header>
              <ResultCount count={filmsCount} />
              <main className={styles.contentContainer}>
                {
                  filmsCount > 0
                    ? films.map((film) => <FilmCard film={film} key={film.id} />)
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

export default FilmList;
