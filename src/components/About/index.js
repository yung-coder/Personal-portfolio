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
        
          <div class="skills-container">
            <div class="circular-progress html"></div>
            <div class="circular-progress css"></div>
            <div class="circular-progress javascript"></div>
            <div class="circular-progress php"></div>
            <div class="circular-progress java"></div>
            <div class="circular-progress react"></div>
          </div>
        
      
      <Loader type="pacman" />
    </>
  );
};

export default About;
