import './App.css';
import { MovieCatalog } from './MovieCatalog/MovieCatalog';
import Movie from './MovieCatalog/components/Movie/Movie'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './MovieCatalog/components/Navbar/Navbar'
import Person from './MovieCatalog/components/Person/Person';

function App() {
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
