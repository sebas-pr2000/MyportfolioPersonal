import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
// importando Imagenes:
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-64.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
// react-router-hash-link para hacer scroll hasta el link mas cercano que coincida, se usa con el reatct-router-dom
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
   const [activeLink, setActiveLink] = useState("home");
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      // dectetamos si el usuario se desplaza hacia abajo con esta funcion
      const onScroll = () => {
         if (window.scrollBy > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      //añadimos el evento
      window.addEventListener("scroll", onScroll);

      //   eliminamos el evento
      return () => window.removeEventListener("scroll", onScroll);
   }, []);

   //    funcion para cambiar el estado del link
   const onUpdateActiveLink = (value) => {
      setActiveLink(value);
   };

   return (
      <Router>
         {/* // condicional del estado */}
         <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
               <Navbar.Brand href="/">
                  <img src={logo} alt="LOGO" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav">
                  <span className="navbar-toggler-icon"></span>
               </Navbar.Toggle>
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ms-auto">
                     <Nav.Link
                        href="#home"
                        className={
                           activeLink === "home"
                              ? "active navbar-link"
                              : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("home")}
                     >
                        Inicio
                     </Nav.Link>
                     <Nav.Link
                        href="#skills"
                        className={
                           activeLink === "skills"
                              ? "active navbar-link"
                              : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("skills")}
                     >
                        Tecnologias
                     </Nav.Link>
                     <Nav.Link
                        href="#projects"
                        className={
                           activeLink === "projects"
                              ? "active navbar-link"
                              : "navbar-link"
                        }
                        onClick={() => onUpdateActiveLink("projects")}
                     >
                        Proyectos
                     </Nav.Link>
                  </Nav>
                  <span className="navbar-text">
                     <div className="social-icon">
                        <a
                           className="linkedin-icon"
                           href="https://www.linkedin.com/in/sebastian-prado-escobar-dev"
                           target="_blank"
                        >
                           <img
                              className="linkedin-img"
                              src={navIcon1}
                              alt=""
                           />
                        </a>
                        <a
                           className="github-icon"
                           href="https://github.com/sebas-pr2000"
                           target="_blank"
                        >
                           <img className="github-icon" src={navIcon2} alt="" />
                        </a>
                        {/* <a href="#">
                           <img src={navIcon3} alt="" />
                        </a> */}
                     </div>
                     <HashLink to="#connect">
                        <button className="vvd">
                           <span>Contactar</span>
                        </button>
                     </HashLink>
                  </span>
               </Navbar.Collapse>
            </Container>
         </Navbar>
      </Router>
   );
}

export default NavBar;
