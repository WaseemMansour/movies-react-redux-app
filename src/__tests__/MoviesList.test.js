import MoviesList from '../components/MoviesList/MoviesList';
import { screen } from '@testing-library/react';
import { renderWithRouter } from '../utils/testsUtils';
import { Provider } from 'react-redux';
import store from '../store';

describe('MoviesList Component', () => {
  
  it('Should render without errors', () => {
    const moviesState = {
      title: 'All Movies', 
      data: [{title: 'Spiderman', overview: 'Lorem ipsum', poster_path: '', release_date: '2010', vote_average: 0}],
      canAddToList: false,
      infiniteScroll: false,
      isLoading: false,
      page: 1,
      totalPages: 1
    }
    renderWithRouter(
    <Provider store={store}>
      <MoviesList {...moviesState} />
    </Provider>);
    expect(screen.getByTestId('moviesListView')).toBeInTheDocument();
  });

});