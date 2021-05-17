import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import App from './App';
import AddMovie from './pages/AddMovie';
import Home from './pages/Home';

import store from './store';

describe('Main App Component', () => {
  it('Should render Header on any route', () => {
    // Arrange
    // Act
    render(
      <Provider store={store}>
        <MemoryRouter>
          <App/>
        </MemoryRouter>
      </Provider>
    )

    // Assert
    expect(screen.getByTestId('headerComponentView')).toBeInTheDocument();
  });

  it('Should render Home on default route', () => {
  
    // Arrange
    // Act
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>
    )
  
    // Assert
    expect(screen.getByTestId('homePageView')).toBeInTheDocument();
  });

  it('Should render AddMovie on add Movie route', () => {
  
    // Arrange
    // Act
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/add-movie']}>
          <AddMovie />
        </MemoryRouter>
      </Provider>
    )
  
    // Assert
    expect(screen.getByText('Add New Movie')).toBeInTheDocument();
  });
  
});

