import './App.css';
import { MovieCatalog } from './MovieCatalog/MovieCatalog';
import Movie from './MovieCatalog/components/Movie/Movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './MovieCatalog/components/Navbar/Navbar'
import Person from './MovieCatalog/components/Person/Person';

function App() {
  const idMovie = useSelector(state => state.movie.idMovie)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getMovieById(idMovie))
  // }, [idMovie])

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<MovieCatalog />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/person/:id' element={<Person />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
