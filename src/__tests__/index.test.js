import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import store from '../store';

// mocks react-dom and its render method
// so that we can assert that render is
// called with <App /> and HTML element with id = root
jest.mock('react-dom', () => ({ render: jest.fn() }))

test('renders with App and root div', () => {
  // Create and append to document body
  // an HTML element with id = root
  const root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)

  // Requires index.js so that react-dom render method is called
  require('../index');

  // Asserts render was called with <App />
  // and HTML element with id = root
  expect(ReactDOM.render).toHaveBeenCalledWith(
    <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </Provider>, root)
})