import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import bootstrap from 'bootstrap';

import './assets/css/App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { MovieDetails } from './components/MovieDetails';
import { NotFound } from './components/NotFound';

const store = createStore(rootReducer);

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/movies/:id" element={<MovieDetails />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
