import Accordion from "react-bootstrap/Accordion";
import styles from "./Curriculum.module.css";
function Curriculum() {
  return (
    <div className={styles.CurriculumContainer}>
      <div className={styles.CurriculumItemsContainer}>
        <div className={styles.CurriculumTitleContainer}>
          <h1 className={styles.MainTitle}>Currículum</h1>
          <a href="Curriculum.pdf" download className={styles.DownloadButton}>
            Descargar PDF
          </a>
        </div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Desarrollador Front-End</h4>
            </Accordion.Header>
            <Accordion.Body>
              Interesado en el diseño e implementación de interfaces para
              aplicaciones web, además de la lógica de programación que permite
              entregar una buena experiencia al usuario.
              <br /> <br />
              Enfocado en JavaScript y su ecosistema, con intereses a mediano
              plazo para producir servicios Back-End con este lenguaje. <br />
              <br />
              Con intenciones de complementar mis conocimientos con Python, Java
              y sus ecosistemas de aplicaciones en el servidor.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Accordion defaultActiveKey="0">
          <Accordion.Item>
            <Accordion.Header>
              <h4>Tecnologías</h4>
            </Accordion.Header>
            <Accordion.Body>
              <b>Lenguajes de programación:</b>
              <br />
              JavaScript, Typescript, HTML y CSS, SASS <br />
              <br />
              <b>Frameworks/Sistemas:</b>
              <br />
              Reactjs, Nextjs, Angular 2+, MongoDB, Mongoosejs, Figma, Git y
              Github
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}

export default Curriculum;
