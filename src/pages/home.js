import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";
import { fetchMovies } from "../store/actions/movies";

const Home = ({moviesdb, userMovies}) => {
  const { page, prevPage } = moviesdb;
  const dispatch = useDispatch();
  
  useEffect(()=>{
    // Only Fetch New Page
    if (page !== prevPage) dispatch(fetchMovies(page));
  }, [dispatch, page, prevPage])

  
  return (
  <div data-testid="homePageView">
    <MoviesList title="My Movies" data={userMovies.list} canAddToList={true} />
    <MoviesList title="All Movies" data={moviesdb.list} infiniteScroll={true} />  
  </div>
)}

const mapStateToProps = ({moviesdb, userMovies}) => {
  return {
    moviesdb,
    userMovies 
  }
}

export default connect(mapStateToProps)(Home);