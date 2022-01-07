import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import styles from "./TuServicio.module.css";
import Accordion from "react-bootstrap/Accordion";

function TuServicioImages() {
  function goToCode() {
    window.open("https://github.com/moctezumadaniel/Celer");
  }
  function goToApp() {
    window.open("https://tuservicio.vercel.app/");
  }
  return (
    <div className={styles.Carousel}>
      <h1 className={styles.MainTitle}>Proyecto TuServicio</h1>
      <Carousel interval={10000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuServicio/1.jpg"
          />
          <Carousel.Caption>
            <h3>Primer Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuServicio/2.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuServicio/3.jpg"
          />
          <Carousel.Caption>
            <h3>Segunda Imágen</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            alt="PRIMER SLIDE"
            src="/TuServicio/4.jpg"
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
          <Accordion.Header>
            Descripcion del proyecto TuServicio
          </Accordion.Header>
          <Accordion.Body>
            Aplicación para buscar y ofrecer servicios, con funciones de citas y
            otras utilidades rapidas relacionadas: calculadora, registros
            rapidos de ingresos y de gastos <br />
            <br />
            Construido con Nextjs, framework basado en Reactjs, para el Front
            End y API's, conectado a una base de datos MongoDB con ayuda de
            mongoose.js; y Redux para el manejo del estado de la aplicación.
            {<br />}
            {<br />}
            Resumen de tecnologias utilizadas:{<br />}
            -JSX <br />
            -CSS{<br />}
            -Nextjs {<br />}
            -MongoDB{<br />}
            -Mongoosejs{<br />}
            -React-redux{<br />}
            -Nextjs API Routes{<br />}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default TuServicioImages;
