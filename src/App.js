import styles from "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Projects from "./components/Projects";
import Curriculum from "./components/Curriculum";
import ContactInformation from "./components/ContactInformation";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Curriculum />
      <Projects />
      <ContactInformation />
    </div>
  );
}

export default App;
