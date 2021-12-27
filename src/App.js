import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slayt from './components/Carousel/carousel';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className="App">
      <Slayt />
      <Cards />
    </div>

  );
}

export default App;
