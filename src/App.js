// import { useEffect } from 'react';
// import { fetchMovies } from './store/actions/movies';
// import { useDispatch } from 'react-redux'
import Header from './components/Header/Header';
import './App.scss';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import AddMovie from './pages/AddMovie';

function App() {
  

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          render={(props)=> (
            <Home { ...props } />
          )}
        />

        <Route
          exact
          path="/add-movie"
          render={(props)=> (
            <AddMovie { ...props } />
          )}
        />
      </Switch>
      
    </div>
  );
}

export default App;