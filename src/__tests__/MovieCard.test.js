import MovieCard from '../components/MovieCard/MovieCard';
import { render, screen } from '@testing-library/react';

describe('MovieCard Component', () => {

  it('Should render without errors', () => {
    const movieData = {title: 'Spiderman', overview: 'Lorem ipsum', poster_path: '', release_date: '2010', vote_average: 0}
    render(<MovieCard movie={movieData} />);
    expect(screen.getByTestId('movieCardView')).toBeInTheDocument();
  })
});