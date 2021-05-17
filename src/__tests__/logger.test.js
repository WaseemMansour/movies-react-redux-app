import logger from '../store/middleware/logger';
import { CHANGE_PAGE_NUMBER } from '../store/actions/movies';
import store from '../store';

describe('Logger Middleware', () => {
  it('Should Log Action Dispatched', () => {
    
    const next = jest.fn();
    logger(store)(next)(CHANGE_PAGE_NUMBER);
    // Assert
    expect(store.dispatch({type: CHANGE_PAGE_NUMBER, pageNum: 2})).toEqual({type: CHANGE_PAGE_NUMBER, pageNum: 2});
  });
  
});

