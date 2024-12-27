import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/bank.png";
import chatify from "../../Assets/Projects/abt.png";
import bitsOfCode from "../../Assets/Projects/copains.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projet </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="RS6-Abt"
              description="Le site RS6-ABT est une plateforme dédiée à la présentation et à la mise en valeur de l'Audi RS6, modifiée par ABT Sportsline. Il permet de découvrir les améliorations de performance, le design unique et les caractéristiques techniques de ce modèle d'exception."
              ghLink="https://github.com/xAMIRAYA/r6s_car"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Copains"
              description="Lors d’un hackathon collaboratif, j’ai participé à la création de Copain d’Avant , une application visant à reconnecter des anciens amis ou collègues. 
              Ce projet ma permis dexplorer le travail en équipe sous pression et dappliquer des solutions innovantes en développement fullstack."
              ghLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gestion Bancaire"
              description="Cette application bancaire a été développée pour offrir une gestion simple et intuitive des comptes clients.
              elle met l'accent sur la sécurité des données et la fluidité de l'expérience utilisateur. Ce projet illustre mes compétences en développement backend et en conception de bases de données relationnelles."
              ghLink="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
