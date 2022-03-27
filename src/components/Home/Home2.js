import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Permitame <span className="purple"> presentarme </span>
            </h1>
            <p className="home-about-body">
              Mi nomnbre es Alan Temix
              <br />
              <br />Soy un apasionado de la técnologia, comence a interesarme en la programación desde los 19 años
              <i>
                <b className="purple"> Mi primer lenguaje de programación fue PHP de ahí prosegui con python en su version 2, posteriormente me pase a javascript y nodejs.</b>
              </i>
              <p>
                Mi primer vistaso a la programación fue cuando me interese en hacer un foro web, como no sabía me conseguí un libro que trataba sobre PHP en su versión 5, en ese entonces la más actual, que se conectaba a una base de datos junto con phpmyadmin.
                Desde ahí empezo mi aprendizaje y fui aprendiendo de manera autodidacta lo que se requería (Bases de datos, Html, Css, JavaScript).
                A la edad de 21 años entre en Academlo, un Bootcamp sobre desarrollo web.
                <br />
                Desde ese momento no he dejado de aprender nuevas tecnologías (Bootstrap, Tailwind, Material UI, ReactJS, React Router, Firebase, Nodejs entre otros)
              </p>
              <br />
              <i>
              Me considero una persona seria, centrada y ágil, trabajo en equipo, comunicación asertiva y gestión del tiempo son habilidades que he ido fortaleciendo desde que empece mi vida laboral.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Conecta conmigo</h1>
            <p>Sientete libre de conectar conmigo en cualquiera de las siguientes plataformas</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Alan-temix"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/alan-sanchez"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/alantemix"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://es.fiverr.com/alantemix"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiFiverr />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
