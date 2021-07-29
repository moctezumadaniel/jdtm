import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import styles from './TuCompra.module.css'
import Accordion from 'react-bootstrap/Accordion'

function TuCompraImages(){

    function goToCode(){
        window.open("https://github.com/moctezumadaniel/twocompra")
    }
    function goToApp(){
        window.open("https://tucompra.vercel.app/")
    }
    return(
        <div className={styles.Carousel}>
        <Carousel >
            <h1>Tu Compra</h1>
            <Carousel.Item>
                <img
                className="d-block w-100"
                alt="PRIMER SLIDE"
                src="/favicon.ico"
                />
                <Carousel.Caption>
                    <h3>Primer Imágen</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                alt="PRIMER SLIDE"
                src="/favicon.ico"
                />
                <Carousel.Caption>
                    <h3>Segunda Imágen</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                alt="PRIMER SLIDE"
                src="/favicon.ico"
                />
                <Carousel.Caption>
                    <h3>Segunda Imágen</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                alt="PRIMER SLIDE"
                src="/favicon.ico"
                />
                <Carousel.Caption>
                    <h3>Segunda Imágen</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                alt="PRIMER SLIDE"
                src="/favicon.ico"
                />
                <Carousel.Caption>
                    <h3>Segunda Imágen</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            <div className={styles.AppButtonsContainer}>
            <Button variant="primary"
            className={styles.AppButton}
            onClick={()=>goToApp()}>Visitar Aplicación
            </Button>
            <Button variant="dark"
            className={styles.AppButton}
            onClick={()=>goToCode()}>
                {`</> Ir al Código`}
            </Button>{' '}
            </div>
            <Accordion>
            <Accordion.Item>
                <Accordion.Header >
                    Descripcion completa del proyecto
                </Accordion.Header>
                <Accordion.Body>
                    Esta es la descripcion completa de tu compra
                </Accordion.Body>

            </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default TuCompraImages