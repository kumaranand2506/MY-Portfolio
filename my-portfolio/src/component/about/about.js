import React from "react";
import "./about.css";
import MYName from "../../asset/MY Name.jpg";
const about = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_image">
            <img src={MYName} alt="MY IMage" />
          </div>
        </div>
        <div className="about_content">
          <h2>About Me</h2>
          <p>Hello I am Anand Kumar from Bihar. Currently I am Learning Front End Devlopment. I am a highly motivated person. Collaborative, team player, and proficient in working with interdisciplinary teams and executing goal-oriented projects. Strongly interested in obtaining a Software Developer position to work on enhancing the product</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>

      
        <div class="style">
          <div class="skill">
            <h3>HTML</h3>
            <div class="progress">
              <div class="html">
                <span>65%</span>
              </div>
            </div>
            <h3>CSS</h3>
            <div class="progress">
              <div class="css">
                <span>60%</span>
              </div>
            </div>

            <h3>Bootstrap</h3>
            <div class="progress">
              <div class="boot">
                <span>70%</span>
              </div>
            </div>
            <h3>JavaScript</h3>
            <div class="progress">
              <div class="javascript">
                <span>45%</span>
              </div>
            </div>
            
            <h3>React</h3>
            <div class="progress">
              <div class="react">
                <span>40%</span>
              </div>
              </div>
          </div>
        </div>
     
    </section>
  );
};

export default about;
