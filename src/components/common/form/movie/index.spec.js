import '@testing-library/jest-dom';
import React from 'react';
import { render, fireEvent, screen } from 'utils/forTest';
import Form from './index';
import App from 'components/App';

const mockFilm = {
  id: 1,
  title: 'Transformer',
  release_date: '2019-06-26',
  genres: ['Action', 'Adventure'],
  poster_path: 'https://image.tmdb.org/t/p/w500/432BowXw7a4fWXSONxBaFKqvW4f.jpg',
};

describe('Form component', () => {
  it('should render', () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<Form setOpen={() => { }} />)).toMatchSnapshot();
  });

  it('should render edit form', () => {
    const { asFragment } = render(<App />);

    expect(asFragment(<Form setOpen={() => { }} isEdit={true} movie={mockFilm} />)).toMatchSnapshot();
  });

  it('should contain input', () => {
    render(<Form setOpen={() => { }} />, { initialState: {} });

    expect(!!screen.getByText(/Title/i)).toEqual(true);
  });

  it("test", () => {
    render(<Form setOpen={() => { }} />, { initialState: {} });
    const btn = screen.getByText('Reset');

    fireEvent.click(btn);

    expect(btn).toBeInTheDocument();
  });

  it("Error submit", () => {
    render(<Form setOpen={() => { }} />, { initialState: {} });
    const btn = screen.getByText('Add');

    fireEvent.click(btn);

    expect(btn).toBeInTheDocument();
  });

});
