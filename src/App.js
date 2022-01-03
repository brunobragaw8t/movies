import bootstrap from 'bootstrap';

import './assets/css/App.scss';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { MovieDetails } from './components/MovieDetails';
import { NotFound } from './components/NotFound';
import { getFavourites } from './actions';
import { Favourites } from './components/Favourites';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavourites());
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/movies/:id" element={<MovieDetails />} />

          <Route path="/favourites" element={<Favourites />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
