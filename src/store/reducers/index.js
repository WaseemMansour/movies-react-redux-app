import { 
  MOVIES_GET_LIST_REQUEST,
  MOVIES_GET_LIST_RESPONSE,
  MOVIES_GET_LIST_FAILURE,
  ADD_MOVIE,
  CHANGE_PAGE_NUMBER
} from '../actions/movies';

const moviesInitialState = {
  userMovies: {
    list: [],
    isLoading: false,
    error: null,
    page: 1,
    prevPage: 0,
    totalPages: 1
  },
  moviesdb: {
    list: [],
    isLoading: false,
    error: null,
    page: 1,
    prevPage: 0,
    totalPages: 1
  }
}

export default function form (state = moviesInitialState, action) {
  switch(action.type) {

    case MOVIES_GET_LIST_REQUEST:
      return {
        ...state,
        moviesdb: {
          ...state.moviesdb,
          isLoading: true,
          error: null
        }
      }

    case MOVIES_GET_LIST_RESPONSE:
      return {
        ...state,
        moviesdb: {
          ...state.moviesdb,
          list: [
            ...state.moviesdb.list,
            ...action.list
          ],
          prevPage: state.moviesdb.page,
          isLoading: false,
          error: null,
          totalPages: action.totalPages
        }
      }

    case MOVIES_GET_LIST_FAILURE:
      return {
        ...state,
        moviesdb: {
          ...state.moviesdb,
          isLoading: false,
          error: action.error
        }
      }

    case CHANGE_PAGE_NUMBER:
      // debugger
      return {
        ...state,
        [action.listName]: {
          ...state[action.listName],
          page: action.pageNum
        }
      }

    case ADD_MOVIE:
      return {
        ...state,
        userMovies: {
          list: [
            ...state.userMovies.list,
            action.movie
          ]
        }
      }    
      
    default :
      return state
  }
}