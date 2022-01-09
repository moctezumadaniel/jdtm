import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./Project.module.css";
import Accordion from "react-bootstrap/Accordion";
import { propTypes } from "react-bootstrap/esm/Image";

function Project(props) {
  function goToCode() {
    window.open(`${props.codeLink}`);
  }
  function goToApp() {
    window.open(`${props.appLink}`);
  }
  return (
    <div className={styles.Carousel}>
      <h1 className={styles.MainTitle}>{props.title}</h1>

      <Carousel interval={10000}>
        {props.images?.map((i) => (
          <Carousel.Item>
            <img className="d-block w-100" alt={i.title} src={i.src} />
            <Carousel.Caption>
              <h3>{i.description}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className={styles.AppButtonsContainer}>
        <Button
          variant="primary"
          className={styles.AppButton}
          onClick={() => goToApp()}
        >
          Visitar Aplicación
        </Button>
        <Button
          variant="dark"
          className={styles.AppButton}
          onClick={() => goToCode()}
        >
          {`</> Ir al Código`}
        </Button>{" "}
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item>
          <Accordion.Header className={styles.AccordionHeader}>
            Descripción del proyecto
          </Accordion.Header>
          <Accordion.Body>{props.children}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Project;
