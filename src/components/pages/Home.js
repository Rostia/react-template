import React, { useState, useEffect, useCallback } from 'react';
import Header from 'components/common/header/index';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import mockFilms from 'components/film/list/mock.json';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    setFilms(mockFilms);
  }, []);

  const addFilm = useCallback((film) => setFilms([...films, film]), [films]);

  const deleteFilm = useCallback(
    (id) => setFilms(films.filter(({ id: filmId }) => filmId !== id)),
    [films],
  );

  const editMovie = useCallback((newMovie) => {
    setFilms([...films.filter(({ id }) => newMovie.id !== id), newMovie]);
  }, [films]);

  return (
    <main>
      <Header addFilm={addFilm} />
      <FilmList data={films} deleteFilm={deleteFilm} editMovie={editMovie} />
      <Footer />
    </main>
  );
};

export default Home;
