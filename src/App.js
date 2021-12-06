import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slayt from './components/Carousel/carousel';
import Navigasyon from './components/navigation bar/navbar';

function App() {
  return (
    <div className="App">

      <Navigasyon />
      <Slayt />
    </div>

  );
}

export default App;
