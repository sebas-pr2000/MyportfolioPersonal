import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// imagenes
import html from "../assets/img/html-5.svg";
import css from "../assets/img/css3.svg";
import javaScript from "../assets/img/javascript.svg";
import git from "../assets/img/git.svg";
import github from "../assets/img/github.svg";
import ReactIcon from "../assets/img/reactnativo.svg";
import Redux from "../assets/img/redux.svg";
import Node from "../assets/img/node-js.svg";
import Express from "../assets/img/express-js.svg";
import PostgreSQL from "../assets/img/postgresql.svg";
import Sass from "../assets/img/sass.svg";

import colorShap from "../assets/img/color-sharp.png";

function Skills() {
   const responsive = {
      superLargeDesktop: {
         // the naming can be any, depends on you.
         breakpoint: { max: 4000, min: 3000 },
         items: 5,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 2,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 1,
      },
   };
   return (
      <section className="skill" id="skills">
         <Container>
            <Row>
               <Col>
                  <div className="skill-bx">
                     <h2>Tecnologías</h2>
                     <p>
                        Estas son las Tecnologías que Domino y uso Diariamente
                        en la industria.
                     </p>
                     <Carousel
                        responsive={responsive}
                        infinite={true}
                        className="skill-slider"
                     >
                        {/* Nombre, imagenes de las Skills */}
                        <div className="item">
                           <img src={html} alt="Image Skill" />

                           <h5>HTML 5</h5>
                        </div>
                        <div className="item">
                           <img src={css} alt="Image Skill" />
                           <h5>CSS 3</h5>
                        </div>
                        <div className="item">
                           <img src={javaScript} alt="Image Skill" />
                           <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                           <img src={git} alt="Image Skill" />
                           <h5>Git</h5>
                        </div>
                        <div className="item">
                           <img src={github} alt="Image Skill" />
                           <h5>GitHub</h5>
                        </div>
                        <div className="item">
                           <img src={ReactIcon} alt="Image Skill" />
                           <h5>React</h5>
                        </div>
                        <div className="item">
                           <img src={Redux} alt="Image Skill" />
                           <h5>Redux</h5>
                        </div>
                        <div className="item">
                           <img src={Node} alt="Image Skill" />
                           <h5>Node.JS</h5>
                        </div>
                        <div className="item">
                           <img src={Express} alt="Image Skill" />
                           <h5>Express.JS</h5>
                        </div>
                        <div className="item">
                           <img src={PostgreSQL} alt="Image Skill" />
                           <h5>PostgreSQL</h5>
                        </div>
                        <div className="item">
                           <img src={Sass} alt="Image Skill" />
                           <h5>Sass</h5>
                        </div>
                     </Carousel>
                  </div>
               </Col>
            </Row>
         </Container>
         <img className="background-image-left" src={colorShap} />
      </section>
   );
}

export default Skills;
