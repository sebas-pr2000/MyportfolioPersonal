import React from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
   //    const formInitialDetails = {
   //       firstName: "",
   //       lastName: "",
   //       email: "",
   //       message: "",
   //    };

   //    //    estado para contacto
   //    const [formDetails, setFormDetails] = useState(formInitialDetails);
   //    const [buttonText, setButtonText] = useState("send");
   //    const [status, setStatus] = useState({});

   //    // funcion Actulizadora
   //    const onFormUpdate = (category, value) => {
   //       setFormDetails({
   //          ...formDetails,
   //          [category]: value,
   //       });
   //    };

   //    const handleSubmit = () => {};

   return (
      <section className="contact" id="connect">
         <Container>
            <Row className="align-items-center">
               <Col md={6}>
                  <img src={contactImg} alt="Contact Us" />
               </Col>
               <Col md={6}>
                  <h2>Ponerse en Contacto</h2>
                  <form
                     action="https://formsubmit.co/sebaslkjh@gmail.com"
                     method="POST"
                     //   onSubmit={handleSubmit}
                  >
                     <Row>
                        <Col sm={6} className="px-1">
                           <input
                              type="text"
                              //   value={formDetails.firstName}
                              placeholder="Nombre"
                              name="Nombre"
                              //   onChange={(e) =>
                              //      onFormUpdate("firstName", e.target.value)
                              //   }
                           />
                        </Col>
                        {/* <Col sm={6} className="px-1">
                           <input
                              type="text"
                              //   value={formDetails.lastName}
                              placeholder="Last Name"
                              name="Last Name"
                              //   onChange={(e) =>
                              //      onFormUpdate("lastName", e.target.value)
                              //   }
                           />
                        </Col> */}
                        <Col sm={6} className="px-1">
                           <input
                              type="email"
                              //   value={formDetails.email}
                              placeholder="Email"
                              name="Email"
                              //   onChange={(e) =>
                              //      onFormUpdate("email", e.target.value)
                              //   }
                           />
                        </Col>
                        <Col>
                           <textarea
                              rows="6"
                              //   value={formDetails.message}
                              placeholder="Mensaje"
                              name="Mensaje"
                              //   onChange={(e) =>
                              //      onFormUpdate("message", e.target.value)
                              //   }
                           />
                           <button type="submit">
                              <span>Enviar</span>
                           </button>
                           <input type="hidden" name="_captcha" value="false" />
                           <input
                              type="hidden"
                              name="_next"
                              value="https://sebastian-portafolio-dev.vercel.app/"
                           />
                        </Col>
                        {/* {status.message && (
                           <Col>
                              <p
                                 className={
                                    status.success === false
                                       ? "danger"
                                       : "success"
                                 }
                              >
                                 {status.message}
                              </p>
                           </Col>
                        )} */}
                     </Row>
                  </form>
               </Col>
            </Row>
         </Container>
      </section>
   );
}

export default Contact;
