import bootstrap from 'bootstrap';

import './assets/css/App.scss';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';

function App() {
  return (
    <div className="App">
      <Header />

      <Search />

      <Footer />
    </div>
  );
}

export default App;
