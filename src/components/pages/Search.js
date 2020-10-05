import React from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/common/header/index';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';

const Search = () => {
  const { search } = useParams();

  return (
    <main>
      <Header />
      <FilmList search={search} />
      <Footer />
    </main>
  );
};

export default Search;
