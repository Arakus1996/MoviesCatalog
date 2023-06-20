import './App.css';
import { MovieCatalog } from './MovieCatalog/MovieCatalog';
import Movie from './MovieCatalog/Movie/Movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const idMovie = useSelector(state => state.movie.idMovie)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMovieById(idMovie))
  // }, [idMovie])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MovieCatalog />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
