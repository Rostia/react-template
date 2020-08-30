import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import mockFilms from 'components/film/list/mock.json';
import FilmDetail from 'components/film/detail';

const Film = ({
  id,
}) => {
  const [films, setFilms] = useState([]);
  const [film, setFilm] = useState(undefined);

  useEffect(() => {
    setFilms(mockFilms);
  }, []);

  useEffect(() => {
    mockFilms.forEach((item) => item.id === id && setFilm(item));
  }, [id]);

  const deleteFilm = (key) => setFilms(films.filter(({ id: filmId }) => filmId !== key));

  const editMovie = (newMovie) => {
    setFilms([...films.filter(({ id: filmId }) => newMovie.id !== filmId), newMovie]);
  };

  return (
    <main>
      {film && <FilmDetail film={film} />}
      <FilmList data={films} deleteFilm={deleteFilm} editMovie={editMovie} />
      <Footer />
    </main>
  );
};

Film.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Film;
