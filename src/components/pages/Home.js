import React from 'react';
import Header from 'components/common/header/index';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';

const Home = () => (
  <main>
    <Header />
    <FilmList />
    <Footer
      render={() => (
        <p>TEST</p>
      )}
    />
  </main>
);

export default Home;
