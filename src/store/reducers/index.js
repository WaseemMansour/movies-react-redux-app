import { 
  MOVIES_GET_LIST_REQUEST,
  MOVIES_GET_LIST_RESPONSE,
  MOVIES_GET_LIST_FAILURE,
  ADD_MOVIE
} from '../actions/movies';

const moviesInitialState = {
  userMovies: {
    list: [],
    page: 1,
    isLoading: false,
    error: null
  },
  moviesdb: {
    list: [],
    page: 1,
    isLoading: false,
    error: null
  }
}

export default function form (state = moviesInitialState, action) {
  switch(action.type) {

    case MOVIES_GET_LIST_REQUEST:
      return {
        ...state,
        moviesdb: {
          ...state.moviesdb,
          isLoading: action.isLoading,
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
            action.list
          ],
          isLoading: false,
          error: action.error
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