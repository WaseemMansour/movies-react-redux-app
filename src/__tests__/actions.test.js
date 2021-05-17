import * as actions from '../store/actions/movies';

describe('Actions', () => {

  it('should create an action to add a Movie', () => {
    const movie = {title: 'Spider Man', overview: 'lorem ipsum', release_date: '2015', poster_path: ''};
    const expectedAction = {
      type: actions.ADD_MOVIE,
      movie
    };
    expect(actions.addMovie(movie)).toEqual(expectedAction);
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
