import { connect } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";

const Home = ({moviesdb, userMovies}) => (
  <>
    <MoviesList title="My Movies" data={userMovies.list} canAddToList={true} />
    <MoviesList title="All Movies" data={moviesdb.list} />  
  </>
)

const mapStateToProps = ({moviesdb, userMovies}) => {
  return {
    moviesdb,
    userMovies 
  }
}

export default connect(mapStateToProps)(Home);