import React from "react";
import "./experience.css";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { MdVerified } from "react-icons/md";
const experience = () => {
  return (
    <div id="experience">
      <h4>What Skill I Have</h4>

      <div className="container expericence_container">
        <h3>Frontend Development</h3>
        <div className="experience_contant">
          <article className="experience_details">
            <div className="icons">
              <div className="htmll">
                <FaHtml5 />
                <h5>HTML</h5>
                <MdVerified />
              </div>

              <div className="csss">
                <FaCss3Alt />
                <h5>CSS</h5>
                <MdVerified />
              </div>

              <div className="boots">
                <FaBootstrap />
                <h5>Bootstrap</h5>
                <MdVerified />
              </div>

              <div className="javas">
                <RiJavascriptLine />
                <h5>Javascript</h5>
                <MdVerified />
              </div>

              <div className="reac">
                <FaReact />
                <h5>React</h5>
                <MdVerified />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default experience;
