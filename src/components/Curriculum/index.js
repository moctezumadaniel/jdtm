import Accordion from "react-bootstrap/Accordion";
import styles from "./Curriculum.module.css";
function Curriculum() {
  return (
    <div className={styles.CurriculumContainer}>
      <div className={styles.CurriculumItemsContainer}>
        <div className={styles.CurriculumTitleContainer}>
          <h1 className={styles.MainTitle}>Currículum</h1>
          <a
            href="Juan Daniel Trejo Moctezuma.pdf"
            download
            className={styles.DownloadButton}
          >
            Descargar PDF
          </a>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Desarrollador Front-End</h4>
            </Accordion.Header>
            <Accordion.Body>
            Me gusta trabajar tanto en el Front-End como en el Back-end, sobre todo en la compresión y
            resolucion de la lógica del negocio para que los usuarios finales utilicen un producto de forma sencilla
            y eficiente.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Tecnologías</h4>
            </Accordion.Header>
            <Accordion.Body>
              <b>Lenguajes:</b>
              <br />
              JavaScript, Typescript,
              HTML, CSS, Golang, Java y SQL <br />
              <br />
              <b>Tecnologías:</b>
              <br />
              Reactjs, Angular, Redux, Rxjs, Nextjs, Bootstrap, Jest, Jasmine, Karma,
              MongoDB, AJAX, Linux, Git, Github, Nodejs, Express, Postman, Docker,
              PostgreSQL, MySQL, Sequilize, GORM, Echo Framework y Spring Boot
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Curriculum;
