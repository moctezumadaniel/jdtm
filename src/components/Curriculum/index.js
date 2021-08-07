import Accordion from 'react-bootstrap/Accordion'
import styles from './Curriculum.module.css'
function Curriculum (){
    return (
        <div className={styles.CurriculumContainer}>
            <h1>Curriculum</h1>
            <Accordion defaultActiveKey='0'>
                <Accordion.Item>
                    <Accordion.Header>
                        <h4>Perfil</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                        Mi descripcion sobre mis deseos de convertirme en un 
                        desarrollo front end
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion defaultActiveKey='0'>
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
    )
}

export default Curriculum