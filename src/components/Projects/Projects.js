import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce_ui from "../../Assets/Projects/ecommerce_ui.png";
import country_info from "../../Assets/Projects/country_info.png";
import TodoApp from "../../Assets/Projects/TodoApp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyectos <strong className="purple">recientes</strong>
        </h1>
        <p style={{ color: "white" }}>
          Estos son algunos de mis proyectos más recientes (subidos a Github)
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TodoApp}
              isBlog={false}
              title="App To do"
              description='Aplicación para crear, actualizar estado y eliminar una tarea.
Por defecto al agregar una nueva tarea su estado será "no completado".
Se puede cambiar el estado a "completado" ó decidir eliminarlo si uno quiere.
En el basurero uno puede decidir si regresarlo a la lista (En este caso iría directamente a los no completados) ó eliminarlo por completo.
Todas las tareas se guardan en el localstorage del navegador para mantener la persistencia de datos.'
              link="https://github.com/Alan-temix/TodoApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce_ui}
              isBlog={false}
              title="Ecommerce User Interface"
              description="Diseño y funcionalidad de una simple ecommerce, contiene el listado principal de los productos, carrito de compras, detalle del producto, y sección de checkout.
Para este proyecto se utilizo ReactJs, Tailwind y react router"
              link="https://github.com/Alan-temix/Ecommerce-ui"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={country_info}
              isBlog={false}
              title="Country Info"
              description="Aplicación que ofrece la información de diferentes paises, tales como ubicación geografica, latitud, longitud, a que region pertenece, area, humedad, temperatura actual de la capital de ese país, entre otros. El aplicativo consume la API de un tercero."
              link="https://github.com/Alan-temix/CountryInfo"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
