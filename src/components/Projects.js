import React from "react";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
// imagenes Proyectos

import countryApp from "../assets/img/Proyectos/countryApp.png";
import cioClothesAl from "../assets/img/Proyectos/CioClothes D.png";
import hypeShop from "../assets/img/Proyectos/HypeShop.png";
import gitHubProfile from "../assets/img/Proyectos/proyectoGithubProfile.png";
import batabit from "../assets/img/Proyectos/proyectoBatabit.png";
import achoo from "../assets/img/Proyectos/proyectoAchoo.png";
import projImg3 from "../assets/img/project-img3.png";

function Projects() {
   const projects = [
      {
         title: "Country APP",
         description: "Proyecto Individual",
         imgUrl: countryApp,
         gitHub:
            "https://github.com/sebas-pr2000/PI-countries/tree/main/PI-Countries-main",
      },
      {
         title: "Cio Clothes",
         description: "E-commerce De Ropa",
         imgUrl: cioClothesAl,
         gitHub: "https://github.com/MakoskiVictor/Ecommerce-API",
         deploy: "https://cioclothes.vercel.app/",
      },
      {
         title: "Hype Shop",
         description: "E-commerce De Zapatillas",
         imgUrl: hypeShop,
         gitHub: "https://github.com/Littyfever/PF-Hype-Shop",
         deploy: "https://hype-kappa.vercel.app/",
      },
      {
         title: "Batabit",
         description: "Maquetación Landing Page",
         imgUrl: batabit,
         gitHub: "https://github.com/sebas-pr2000/Batabit",
         deploy: "http://batabit-pi.vercel.app/",
      },
      {
         title: "Github Profile",
         description: "Buscador de Perfiles GitHub",
         imgUrl: gitHubProfile,
         gitHub: "https://github.com/sebas-pr2000/GitHub-Profile",
      },
      {
         title: "Achoo",
         description: "Landing Page Achoo",
         imgUrl: achoo,
         gitHub: "https://github.com/sebas-pr2000/Landing-page-Achoo",
         deploy: "https://landing-page-react-eta.vercel.app/",
      },
   ];
   return (
      <section className="project" id="projects">
         <Container>
            <Row>
               <Col>
                  <h2>PROYECTOS </h2>
                  <p>Proyectos que he Realizado:</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                     <Nav
                        variant="pills"
                        className="nav-pills mb-5 justify-content-center align-items-center"
                        id="pills-tab"
                     >
                        {/* <Nav.Item>
                           <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                           <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item> */}
                     </Nav>
                     <Tab.Content>
                        <Tab.Pane eventKey="first">
                           <Row>
                              {projects.map((project, index) => {
                                 return (
                                    <ProjectCard key={index} {...project} />
                                 );
                              })}
                           </Row>
                        </Tab.Pane>
                        {/* <Tab.Pane eventKey="second">-Lorem Ipsum</Tab.Pane>
                        <Tab.Pane eventKey="third">-Lorem Ipsum</Tab.Pane> */}
                     </Tab.Content>
                  </Tab.Container>
               </Col>
            </Row>
         </Container>
         <img src={colorSharp2} className="background-image-right" />
      </section>
   );
}

export default Projects;
