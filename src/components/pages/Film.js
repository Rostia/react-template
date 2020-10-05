import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import { URL_API, MOVIES } from 'constants/api';
import FilmDetail from 'components/film/detail';

const Film = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(undefined);

  useEffect(() => {
    axios.get(`${URL_API}${MOVIES}/${id}`)
      .then(({ data }) => setFilm(data));
  }, [id]);

  return (
    <main>
      {film && <FilmDetail film={film} />}
      <FilmList />
      <Footer />
    </main>
  );
};

export default Film;
