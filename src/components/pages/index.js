import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import HomePage from 'components/pages/Home';
import FilmPage from 'components/pages/Film';

const Pages = () => {
  const [page, setPage] = useState('home');
  const { search } = document.location;
  const parsed = queryString.parse(search);

  useEffect(() => {
    setPage(parsed.page ? parsed.page : 'home');
  }, [parsed.page]);

  return (
    <>
      {page === 'home' && <HomePage />}
      {page === 'film' && <FilmPage id={parsed?.id} />}
    </>
  );
};

export default Pages;
