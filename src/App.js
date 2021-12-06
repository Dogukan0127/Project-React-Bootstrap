import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slayt from './components/Carousel/carousel';
import Navigasyon from './components/navigation bar/navbar';
import Cards from './components/Cards/cards';

function App() {
  return (
    <div className="App">
      <Navigasyon />
      <Slayt />
      <Cards />
    </div>

  );
}

export default App;
