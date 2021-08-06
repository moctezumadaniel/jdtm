import styles from './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import Projects from './components/Projects';

function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Projects/>
    </div>
  );
}

export default App;
