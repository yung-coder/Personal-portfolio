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
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
          expedita a quibusdam nulla veritatis similique enim accusantium autem
          quae. Aspernatur illum voluptatem, non quisquam iste magnam illo
          reprehenderit, adipisci in mollitia alias temporibus nisi!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          harum eveniet, doloremque placeat est odit quas voluptatum quis vero
          officia ex quos natus corrupti, facere repellendus in, praesentium
          officiis et quo sed.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus,
          voluptatem voluptatibus at vero labore minus excepturi cum repudiandae
          eum tempora sit aperiam explicabo maiores eos doloribus aliquid modi
          doloremque architecto.
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
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
