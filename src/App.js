import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import bootstrap from 'bootstrap';

import './assets/css/App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { SearchResults } from './components/SearchResults';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <Search />

        <SearchResults />

        <Footer />
      </div>
    </Provider>
  );
}

export default App;
