import { fireEvent, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { renderWithRouter } from '../utils/testsUtils';
import Header from '../components/Header/Header';

describe('Header Component', () => {
  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
  })
  
  it('Should render Header properly', () => {
    renderWithRouter(<Header />);
    // Assert
    expect(screen.getByTestId('headerComponentView')).toBeInTheDocument();
  });
  
  it('Should navigate to Home When Logo clicked', () => {
    const { getByTestId, history } = renderWithRouter(<Header />, { route: '/add-movie'});
    const logo = getByTestId('logo');
    const logoLink = logo.querySelector('a');
    
    // Assert
    fireEvent.click(logoLink);
    expect(history.location.pathname).toBe('/');
  });
  
});

