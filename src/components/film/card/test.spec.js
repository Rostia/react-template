import React from 'react';
import FilmCard from 'components/film/card/index';
import { BrowserRouter as Router } from 'react-router-dom';

const mockFilm = {
  id: 1,
  title: 'Transformer',
  release_date: '2019-06-26',
  genres: ['Action', 'Adventure'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

describe('FilmCard component', () => {
  it("should render FilmCard component", () => {
    const component = render(<Router><FilmCard film={mockFilm} /></Router>);
    expect(component).toMatchSnapshot();
  });
});
