import Project from "../Project";
import TuCompra from "../TuCompra";
import TuServicio from "../TuServicio";
import styles from "./Projects.module.css";
function Projects() {
  const comidayaDescription = `Aplicación para buscar y compartir recetas, además de la posibilidad de vender y comprar comidas.\nConstruido con Angular y sus respectivos complementos para el manejo de rutas, cliente http y NgRX para el manejo del estado global integrado con una base de datos Firebase`;
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
        description={comidayaDescription}
      />
    </div>
  );
}

export default Projects;
