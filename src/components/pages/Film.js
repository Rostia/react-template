import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import { URL_API, MOVIES } from 'constants/api';
import FilmDetail from 'components/film/detail';

const Film = ({
  id,
}) => {
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

Film.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Film;
