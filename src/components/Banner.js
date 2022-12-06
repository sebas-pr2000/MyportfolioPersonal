import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle, ArrowDownCircle } from "react-bootstrap-icons";
import React from "react";
import headerImg from "../assets/img/header-img.svg";
// import "animate.css";
// import TrackVisibility from "react-on-screen";

export default function Banner() {
   // Estados para Animacion de Escribir
   const [loopNumber, setLoopNumber] = useState(0);
   const [isDeleting, setIsDeleting] = useState(false);
   const [text, setText] = useState("");
   const [delta, setDelta] = useState(300 - Math.random() * 100);
   const [index, setIndex] = useState(1);
   const toRotate = ["Web Developer", "Web Designer", "Front-End Developer"];
   const period = 2000;

   // useEffect para animacion
   useEffect(() => {
      let ticker = setInterval(() => {
         tick();
      }, delta);

      return () => {
         clearInterval(ticker);
      };
   }, [text]);

   // funcion para escribir
   const tick = () => {
      let i = loopNumber % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
         ? fullText.substring(0, text.length - 1)
         : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
         setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
         setIsDeleting(true);
         setIndex((prevIndex) => prevIndex - 1);
         setDelta(period);
      } else if (isDeleting && updatedText === "") {
         setIsDeleting(false);
         setLoopNumber(loopNumber + 1);
         setIndex(1);
         setDelta(500);
      } else {
         setIndex((prevIndex) => prevIndex + 1);
      }
   };

   return (
      <section className="banner" id="home">
         <Container>
            <Row className="aligh-items-center">
               <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Bienvenido a Mi Portafolio</span>
                  <h1>
                     {`Hola Soy Sebastian `}
                     <span
                        className="txt-rotate"
                        dataPeriod="1000"
                        data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                     >
                        <span className="wrap">{text}</span>
                     </span>
                  </h1>
                  <p>
                     Soy Fullstack Devoloper con Preferencia Al Área Front-End
                     con Mucha Curiosidad y apasionado de la Tecnología. Este es
                     mi Portafolio Personal donde Enseño mis Proyectos, Si Te
                     Interesan mis Servicios Puedes Contactarme.
                  </p>
                  <button>
                     <a
                        className="BtnDownload"
                        href="./CV Sebastian Prado Escobar.pdf"
                        download
                     >
                        Descargar CV
                     </a>
                     <ArrowDownCircle size={25} />
                  </button>
               </Col>
               <Col xs={12} md={6} xl={5}>
                  <img src={headerImg} alt="Header IMG" />
               </Col>
            </Row>
         </Container>
      </section>
   );
}
