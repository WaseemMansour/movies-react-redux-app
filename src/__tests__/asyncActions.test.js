import * as actions from '../store/actions/movies';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

export const API_BASE = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

describe('Async Actions', () => {

  beforeEach(() => {
    moxios.install();
  })

  afterEach(() => {
    moxios.uninstall();
  })

  it('should create MOVIES_GET_LIST_RESPONSE when fetching movies has been done', async () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200, 
        response : [{ movies: [{title: 'Superman'}, {title: 'Justice League'}]}],
      })
    })

    const expectedActions = [
      { type: actions.MOVIES_GET_LIST_REQUEST },
      { type: actions.MOVIES_GET_LIST_RESPONSE }
    ];

    const store = mockStore({ movies: []});
    
    return store.dispatch(actions.fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  });

  
  it('should create MOVIES_GET_LIST_FAILURE when fetching movies not working', async () => {

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 404
      })
    })

    const expectedActions = [
      { type: actions.MOVIES_GET_LIST_REQUEST },
      { type: actions.MOVIES_GET_LIST_FAILURE,
        error: 'Request failed with status code 404',
      }
    ];

    const store = mockStore({ movies: []});
    
    return store.dispatch(actions.fetchMovies()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })

  });

  it('should create an action to set Page Num', () => {
    const listName = 'moviesdb';
    const pageNum = 2;
    const expectedAction = {
      type: actions.CHANGE_PAGE_NUMBER,
      listName,
      pageNum
    };
    expect(actions.setPageNum(listName, pageNum)).toEqual(expectedAction);
  });

});
