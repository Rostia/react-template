import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { connect } from 'react-redux';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import { fetchMovie } from 'actions/movies';
import FilmDetail from 'components/film/detail';

const Film = ({
  actionFetchMovie,
  movies,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const { currentFilm } = movies;

  useEffect(() => {
    actionFetchMovie(id);
  }, [id]);

  return (
    <main>
      {currentFilm && <FilmDetail film={currentFilm} />}
      <FilmList />
      <Footer />
    </main>
  );
};

const mapStateToProps = ({ movies }) => ({
  movies,
});

const mapDispatchToProps = (dispatch) => ({
  actionFetchMovie: (id) => dispatch(fetchMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Film);
