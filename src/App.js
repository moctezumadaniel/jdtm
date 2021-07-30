import './App.css';
import Navbar from './components/Navbar';
import TuCompra from './components/TuCompra';
import "bootstrap/dist/css/bootstrap.min.css"
import TuServicio from './components/TuServicio';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TuCompra/>
      <TuServicio/>
    </div>
  );
}

export default App;
