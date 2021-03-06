import axios from 'axios';
export const ADD_MOVIE = 'ADD_MOVIE';
export const MOVIES_GET_LIST_REQUEST = 'MOVIES_GET_LIST_REQUEST';
export const MOVIES_GET_LIST_RESPONSE = 'MOVIES_GET_LIST_RESPONSE';
export const MOVIES_GET_LIST_FAILURE = 'MOVIES_GET_FAILURE';
export const CHANGE_PAGE_NUMBER = 'CHANGE_PAGE_NUMBER';

export const API_BASE = process.env.REACT_APP_API_URL;
export const API_KEY = process.env.REACT_APP_API_KEY;

export const addMovie = movie => {
  return {
    type: ADD_MOVIE,
    movie
  }
}

export const fetchMoviesRequest = _ => {
  return {
    type: MOVIES_GET_LIST_REQUEST
  }
}

export const fetchMoviesSuccess = data => {
  return {
    type: MOVIES_GET_LIST_RESPONSE,
    list: data.results,
    totalPages: data.total_pages
  }
}

export const fetchMoviesFailure = error => {
  return {
    type: MOVIES_GET_LIST_FAILURE,
    error
  }
}

export const fetchMovies = pageNum => {
  return async dispatch => {
    dispatch(fetchMoviesRequest());
    return axios.get(`${API_BASE}/discover/movie?page=${pageNum}&api_key=${API_KEY}`)
      .then(response => {
        const { data } = response;
        dispatch(fetchMoviesSuccess(data))
      })
      .catch(error => {
        dispatch(fetchMoviesFailure(error.message))
      })
  }
}

export const setPageNum = (listName, pageNum) => {
  return {
    type: CHANGE_PAGE_NUMBER,
    listName,
    pageNum
  }
}