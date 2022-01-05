import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./TuCompra.module.css";
import Accordion from "react-bootstrap/Accordion";

function TuCompraImages() {
  function goToCode() {
    window.open("https://github.com/moctezumadaniel/twocompra");
  }
  function goToApp() {
    window.open("https://tucompra2.vercel.app/");
  }
  return (
    <div className={styles.Carousel}>
      <h1 className={styles.MainTitle}></h1>
      <Carousel interval={10000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuCompra/1.jpg"
          />
          <Carousel.Caption>
            <h3>Primer Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuCompra/2.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuCompra/3.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuCompra/4.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuCompra/1.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>
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
            Descripcion del proyecto TusCompras
          </Accordion.Header>
          <Accordion.Body>
            Esta es la descripcion completa de tu compra
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuCompraImages;
