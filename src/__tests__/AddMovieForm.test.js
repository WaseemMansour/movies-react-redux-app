
import { act, fireEvent, screen } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom';
import { renderWithRouter } from '../utils/testsUtils';
import AddMovieForm from '../components/AddMovieForm/AddMovieForm';
import store from '../store';
import { Provider } from 'react-redux';

describe('Add Movie Form Component', () => {

  let container = null;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    renderWithRouter(<Provider store={store}><AddMovieForm /></Provider>);
  })

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null
  })
  
  it('Should render Header properly', () => {
    // Assert
    expect(screen.getByTestId('addMovieFormView')).toBeInTheDocument();
  });
  
  it('Should render basic field', () => {
    expect(screen.getByRole('textbox', { name: /title/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /year/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /overview/i})).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i})).toBeInTheDocument();
  });

  it('Should validate form fields', async ()=> {
    const mockSave = jest.fn();
    act(() => {
      fireEvent.input(screen.getByRole('textbox', { name: /title/i}), {
        target: {
          value: ''
        }
      });
      fireEvent.input(screen.getByRole('textbox', { name: /year/i}), {
        target: {
          value: ''
        }
      });
      fireEvent.input(screen.getByRole('textbox', { name: /overview/i}), {
        target: {
          value: ''
        }
      });
      fireEvent.click(screen.getByRole('button', { name: /submit/i}));
    })

    expect(await screen.findAllByRole('alert')).toHaveLength(3);
    expect(mockSave).not.toBeCalled();

  });

});
