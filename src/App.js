import { useEffect } from 'react';
import './App.css';
import { fetchMovies } from './store/actions/movies';
import { useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchMovies(1));
  }, [dispatch])
  return (
    <div className="App">
      <h1>Movies Showtime</h1>  
    </div>
  );
}

export default App;
