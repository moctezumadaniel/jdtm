// import Project from "../Project";
import TuCompra from "../TuCompra";
import TuServicio from "../TuServicio";
import styles from "./Projects.module.css";
function Projects() {
  return (
    <div className={styles.ProyectsContainer}>
      <TuServicio />
      <TuCompra />
      {/* <Project
        title="Proyecto de prueba"
        appLink="https://www.google.com/"
        codeLink="https://www.facebook.com/"
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
        description="Descripcion de prueba del proyecto"
      /> */}
    </div>
  );
}

export default Projects;
