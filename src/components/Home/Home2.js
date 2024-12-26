import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aya2.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               PERMETTEZ-<span className="purple"> MOI </span>DE ME PRÉSENTER
            </h1>
            <p className="home-about-body">
             Le développement est devenu une véritable passion, et j’ai déjà acquis des compétences solides dans ce domaine..🤷‍♂️
              <br />
              <br />Je maîtrise des langages classiques comme
              <i>
                <b className="purple">PHP, SQL, Python. </b>
              </i>
              <br />
              <br />
              Mes centres d'intérêt incluent la création de nouvelles , 
               &nbsp;
              <i>
                <b className="purple">technologies web et d'applications </b> 
                 avec une attention particulière à la conception de systèmes efficaces et intuitifs.{" "}
              </i>
              <br />
              <br />
              uand c’est possible, j’applique également ma passion pour le développement avec
               <b className="purple"> Laravel </b> et
              <i>
                <b className="purple">
                  {" "}
                  des bibliothèques modernes comme 
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"> React.js</b>
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
            <h1>CONTACTER MOI</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/xAMIRAYA"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aya-amir-23bb68306/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li> */}
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
