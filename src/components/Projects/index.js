import Project from "../Project";
import styles from "./Projects.module.css";
function Projects() {
  return (
    <div className={styles.ProyectsContainer}>
      <Project
        title="Proyecto TuServicio"
        appLink="https://tuservicio.vercel.app/"
        codeLink="https://github.com/moctezumadaniel/tuservicio"
        images={[
          {
            src: "/TuServicio/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuServicio/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuServicio/1.jpg",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
        ]}
      >
        Aplicación para buscar y ofrecer servicios, con funciones de citas y
        otras utilidades rápidas relacionadas: calculadora, registros rápidos de
        ingresos y de gastos <br />
        <br />
        Construido con Nextjs, framework basado en Reactjs, para el Front End y
        API's, conectado a una base de datos MongoDB con ayuda de mongoose.js; y
        Redux para el manejo del estado de la aplicación.
        {<br />}
        {<br />}
        Resumen de tecnologías utilizadas:{<br />}
        -JSX <br />
        -CSS{<br />}
        -Nextjs {<br />}
        -MongoDB{<br />}
        -Mongoosejs{<br />}
        -React-redux{<br />}
        -Nextjs API Routes{<br />}
      </Project>
      <Project
        title="Proyecto TusCompras"
        appLink="https://tuscompras.vercel.app/"
        codeLink="https://github.com/moctezumadaniel/tuscompras"
        images={[
          {
            src: "/TuCompra/tuscomprasInicio.webp",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/tuscomprasCompras.webp",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/tuscomprasVentas.webp",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/tuscomprasMensajesVendedores.webp",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
          {
            src: "/TuCompra/tuscomprasMenu.webp",
            title: "Titulo de prueba",
            description: "Descripcion de la imagen",
          },
        ]}
      >
        Aplicación para buscar y vender productos, con reseñas, comentarios y
        mensajería entre clientes y vendedores para la resolución de problemas
        <br />
        <br />
        Construido con Create React App para el Front End, conectado a una base
        de datos Firebase y Redux para el manejo del estado de la aplicación.{" "}
        <br />
        <br />
        Resumen de tecnologías utilizadas:{<br />}
        -JSX <br />
        -CSS{<br />}
        -React{<br />}
        -Firebase{<br />}
        -React-redux{<br />}
        -React-router{<br />}
      </Project>
      <Project
        title="Proyecto ComidaYa"
        appLink="https://comidaya.vercel.app/"
        codeLink="https://github.com/moctezumadaniel/comidaya"
        images={[
          {
            src: "/Comidaya/comidayaInicio.webp",
            title: "Titulo de prueba",
            description: "Encuentra y comparte recetas y comidas",
          },
          {
            src: "/Comidaya/comidayaRecetasFavoritas.webp",
            title: "Titulo de prueba",
            description: "Guarda tus recetas favoritas",
          },
          {
            src: "/Comidaya/comidayaComidasFavoritas.webp",
            title: "Titulo de prueba",
            description: "Guarda tus comidas favoritas",
          },
          {
            src: "/Comidaya/comidayaMenu.webp",
            title: "Titulo de prueba",
            description: "Guarda tus comidas favoritas",
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
