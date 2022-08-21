import {
  faCss3,
  faFigma,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "react-loaders";
import "./index.scss";
const About = () => {
  return (
    <>
      <div className="aboutme">
        <h1>About me</h1>
        <h2>Greetings!</h2>
        <p>
          Myself  Saksham Chandel and . I'm a currently a student in computer science as a major and a front end
          developer and learning about software development with a passion for
          Software development. 
        </p>
        <p>
          I am from india Himanchal pardesh Teh. palampur i got a intrest in software development from a long time and love to learn about new techlogies
        </p>
        <p>
          Looking forward to work as a software developer 
        </p>
        <p>
          Thanks 
        </p>
        <p>
          Saksham Chandel
        </p>
        <hr />
      </div>
      <h1 className="midhead">Skills</h1>
      <div className="skill-section">
        <div class="skills">
          <div class="skill" id="html">
            <span class="title-html">HTML</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>

          <div class="skill" id="css">
            <span className="title-css">CSS</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>

          <div class="skill" id="js">
            <span class="title-js">JS</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="react">
            <span class="title-react">Reactjs</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="next">
            <span class="title-Nextjs">Nextjs</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="C">
            <span class="title-C">C++/C</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="Node">
            <span class="title-Nodejs">Nodejs</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="Docker">
            <span class="title-docker">Docker</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="figma">
            <span class="title-docker">Figma</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
          <div class="skill" id="problem">
            <span class="title-docker">Problem solving</span>
            <div class="progress-bar">
              <div class="progress"></div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
