import React from "react";
import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/icons8-github-64.svg";
import deployIcon from "../assets/img/DeployIcon.png";

function ProjectCard({ title, description, imgUrl, gitHub, deploy }) {
   return (
      <Col sm={6} md={4}>
         <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
               <h4>{title}</h4>
               <span>{description}</span>
               <div className="social-icon-projects">
                  <a className="github-icon" href={gitHub} target="_blank">
                     <img className="github-icon" src={navIcon2} alt="" />
                  </a>
                  {deploy && (
                     <a className="deploy-icon" href={deploy} target="_blank">
                        <img className="deploy-icon" src={deployIcon} alt="" />
                     </a>
                  )}
               </div>
            </div>
         </div>
      </Col>
   );
}

export default ProjectCard;
