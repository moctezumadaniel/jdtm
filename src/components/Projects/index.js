import TuCompra from "../TuCompra";
import TuServicio from "../TuServicio";
import styles from './Projects.module.css'
function Projects(){
    return(
        <div className={styles.ProyectsContainer}>
            <TuServicio/>
            <TuCompra/>
        </div>
    )
}

export default Projects