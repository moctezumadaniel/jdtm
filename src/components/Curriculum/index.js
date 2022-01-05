import Accordion from "react-bootstrap/Accordion";
import styles from "./Curriculum.module.css";
function Curriculum() {
  return (
    <div className={styles.CurriculumContainer}>
      <div className={styles.CurriculumItemsContainer}>
        <div className={styles.CurriculumTitleContainer}>
          <h1>Currículum</h1>
          <a href="Curriculum.pdf" download className={styles.DownloadButton}>
            Descargar PDF
          </a>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Perfil</h4>
            </Accordion.Header>
            <Accordion.Body>
              Mi descripcion sobre mis deseos de convertirme en un desarrollo
              front end
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Educación</h4>
            </Accordion.Header>
            <Accordion.Body>
              Mi descripcion sobre las tecnologias aprendidas
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Curriculum;
