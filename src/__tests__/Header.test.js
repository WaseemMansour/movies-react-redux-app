import { act, render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
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
  
  it('Should render Header on any route', () => {
    // Act
    act(() => {
      render(<BrowserRouter><Header /></BrowserRouter>, container);
    });
    // Assert
    expect(screen.getByTestId('headerComponentView')).toBeInTheDocument();
  });
  
});

