import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>

           Bonjour à tous, je suis <span className="purple"> Aya Amir </span>
            {/* from <span className="purple"> Bhubaneswar, India.</span> */}
            <br />
            développeur fullstack et étudiant en 2e année de développement digital.         
       
           Je suis passionné par le développement web et mobile, avec une expertise en Laravel, React, 
           et la création de projets uniques qui allient créativité et technologie. 
           J'aime apprendre de nouvelles technologies et les intégrer dans des projets concrets.
            <br />
            <br />
            À part coder, voici d'autres activités que j'adore !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jeux vidéo
            </li>
            <li className="about-activity">
              <ImPointRight /> Écrire des articles techniques sur des blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
