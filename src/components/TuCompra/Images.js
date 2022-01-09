import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./TuCompra.module.css";
import Accordion from "react-bootstrap/Accordion";

function TuCompraImages() {
  function goToCode() {
    window.open("https://github.com/moctezumadaniel/tuscompras");
  }
  function goToApp() {
    window.open("https://tuscompras.vercel.app/");
  }
  return (
    <div className={styles.Carousel}>
      <h1 className={styles.MainTitle}>Proyecto TusCompras</h1>
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
            Descripcion del proyecto
          </Accordion.Header>
          <Accordion.Body>
            Aplicación para buscar y vender productos, con reseñas, comentarios
            y mensajería entre clientes y vendedores para la resolución de
            problemas
            <br />
            <br />
            Construido con Create React App para el Front End, conectado a una
            base de datos Firebase y Redux para el manejo del estado de la
            aplicación. <br />
            <br />
            Resumen de tecnologías utilizadas:{<br />}
            -JSX <br />
            -CSS{<br />}
            -React{<br />}
            -Firebase{<br />}
            -React-redux{<br />}
            -React-router{<br />}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuCompraImages;
