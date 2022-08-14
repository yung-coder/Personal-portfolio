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
      <div class="content">
        <div class="card">
          <div class="firstinfo">
            <img src="https://randomuser.me/api/portraits/lego/6.jpg" />
            <div class="profileinfo">
              <h1>Francesco Moustache</h1>
              <h3>Python Ninja</h3>
              <p class="bio">
                Lived all my life on the top of mount Fuji, learning the way to
                be a Ninja Dev.
              </p>
            </div>
          </div>
        </div>
        <div class="badgescard">
          {" "}
          <span class="devicons devicons-django"></span>
          <span class="devicons devicons-python"> </span>
          <span class="devicons devicons-codepen"></span>
          <span class="devicons devicons-javascript_badge"></span>
          <span class="devicons devicons-gulp"></span>
          <span class="devicons devicons-angular"></span>
          <span class="devicons devicons-sass"></span>
        </div>
      </div>
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
      <div className="skilldection">
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
        <div class="circle-wrap">
          <div class="circle">
            <div class="mask half">
              <div class="fill"></div>
            </div>
            <div class="mask full">
              <div class="fill"></div>
            </div>
            <div class="inside-circle"> 75% </div>
          </div>
        </div>
     </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;
