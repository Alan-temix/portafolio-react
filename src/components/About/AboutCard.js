import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, me llamo<span className="purple"> Alan Temix </span>
            soy de <span className="purple"> Veracruz, México. </span>
            <br />Soy un estudiante de programación y desarrollo web, actualmente me encuentro estudiando en Academlo.
            <br />Aunque algunos de mis conocimientos actuales los había desarrollado desde antes de manera autodidacta.
            <br />Creo en que un buen desarrollador no solo se mide por sus aptitudes duras si no también las habilidades blandas.
            <br />
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Trabajo en equipo
            </li>
            <li className="about-activity">
              <ImPointRight /> Comunicación asertiva
            </li>
            <li className="about-activity">
              <ImPointRight /> Gestión del tiempo
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
