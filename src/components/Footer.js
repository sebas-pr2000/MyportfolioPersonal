import React from "react";
import { Col, Container, Row } from "react-bootstrap";
// importando Imagenes:
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8-github-64.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
function Footer() {
   return (
      <footer className="footer">
         <Container className="footer-contain">
            <Row className="align-items-center"></Row>
            {/* <Col sm={6} className="footer-logo">
               <img src={logo} alt="LOGO" />
            </Col> */}
            <Col
               sm={6}
               className="text-center text-sm-end footer-contain-icons"
            >
               <div className="social-icon">
                  <a
                     className="linkedin-icon"
                     href="https://www.linkedin.com/in/sebastian-prado-escobar-dev"
                     target="_blank"
                  >
                     <img className="linkedin-img" src={navIcon1} alt="" />
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
               <p>CopyRight 2022. All Right Reserved</p>
            </Col>
         </Container>
      </footer>
   );
}

export default Footer;
