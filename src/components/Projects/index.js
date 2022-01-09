import Project from "../Project";
import TuCompra from "../TuCompra";
import TuServicio from "../TuServicio";
import styles from "./Projects.module.css";
function Projects() {
  return (
    <div className={styles.ProyectsContainer}>
      <TuServicio />
      <TuCompra />
      <Project
        title="Proyecto ComidaYa"
        appLink="https://comidaya.vercel.app/"
        codeLink="https://github.com/moctezumadaniel/comidaya"
        images={[
          {
            src: "/TuCompra/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
        ]}
      >
        Aplicación para buscar y compartir recetas, además de la posibilidad de
        vender y comprar comidas.
        <br />
        <br />
        Construido con Angular y sus respectivos complementos para el manejo de
        rutas, cliente http y NgRX para el manejo del estado global integrado
        con una base de datos Firebase
        <br />
        <br />
        Resumen de tecnologías utilizadas:{<br />}
        -HTML <br />
        -CSS{<br />}
        -Typescript{<br />}
        -NGRX{<br />}
        -RxJS{<br />}
        -Firebase{<br />}
      </Project>
    </div>
  );
}

export default Projects;
