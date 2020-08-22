import React, { Component } from 'react';
import Header from 'components/common/header/index';
import Footer from 'components/common/footer';
import FilmList from 'components/film/list';
import mockFilms from 'components/film/list/mock.json';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
    };

    this.addFilm = this.addFilm.bind(this);
    this.deleteFilm = this.deleteFilm.bind(this);
    this.editMovie = this.editMovie.bind(this);
  }

  componentDidMount() {
    this.setState({
      films: mockFilms,
    });
  }

  addFilm(film) {
    const { films } = this.state;

    this.setState({
      films: [...films, film],
    });
  }

  deleteFilm(id) {
    const { films } = this.state;

    this.setState({
      films: films.filter(({ id: filmId }) => filmId !== id),
    });
  }

  editMovie(newMovie) {
    const { films } = this.state;

    this.setState({
      films: [...films.filter(({ id }) => newMovie.id !== id), newMovie],
    });
  }

  render() {
    const { films } = this.state;

    return (
      <main>
        <Header addFilm={this.addFilm} />
        <FilmList data={films} deleteFilm={this.deleteFilm} editMovie={this.editMovie} />
        <Footer />
      </main>
    );
  }
}
export default Home;
