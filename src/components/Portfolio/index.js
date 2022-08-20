import React from "react";
import "./index.scss";
import github from "./github.png";
import play from './reactplay.png';
const index = () => {
  return (
    <div className="holder">
      <div className="introhead">
        <h1>Projects</h1>
      </div>
      <div class="container-portfolio">
        <div class="card">
          <h1 class="title">Project 1</h1>
          <h3>E-Notes</h3>
          <div class="bar">
            <div className="content-portfolio">
              A simple notes taking app using pure javascript...
            </div>
            {/* <div class="emptybar"></div>
            <div class="filledbar"></div> */}
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Notes-_Taking_website-E-Notes"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 2</h1>
          <h3>Form Validator</h3>
          <div class="bar">
            <div className="content-portfolio">
              A from validator using pure javascript...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Form_Validator"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 3</h1>
          <h3>Tic-Tac-Toe</h3>
          <div class="bar">
            <div className="content-portfolio">
              A simple Tic Tac Toe game using javascript !
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Tic-Tac-Toe"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 4</h1>
          <h3>Postman_clone</h3>
          <div class="bar">
            <div className="content-portfolio">
              Postman clone using fetch api in javascript...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Postman_clone"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 5</h1>
          <h3>Drag-Drop-image-in-html-page</h3>
          <div class="bar">
            <div className="content-portfolio">
              A Simple Darg Drop feature in html page using javascript...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Drag_Drop-image-in-html-page"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 6</h1>
          <h3>News APP REACT</h3>
          <div class="bar">
            <div className="content-portfolio">
              A News app build using reactjs and api's...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/News-app-react"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 7</h1>
          <h3>Notes on cloud</h3>
          <div class="bar">
            <div className="content-portfolio">
              A full stack app for taking notes...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Notes-on-cloud"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 8</h1>
          <h3>React Weather app</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app for searching weather of a loaction ...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/React-weather-app"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 9</h1>
          <h3>Devs jokes</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app for fetching some dev jokes ...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Dev-jokes"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 10</h1>
          <h3>Video-call-app</h3>
          <div class="bar">
            <div className="content-portfolio">
              A Realtime video chat app 🚀 💻
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Video-call-app-"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 11</h1>
          <h3>Searc-Engine-clone</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app a clone of google search engine...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Search-engine-clone"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 12</h1>
          <h3>Cryptocurrency tracker app</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app for tracking crypto ....
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Crypto-app"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 13</h1>
          <h3>Code editor</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app for editing html css and js ...
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Code-editor"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
        <div class="card">
          <h1 class="title">Project 14</h1>
          <h3>Pokemon app</h3>
          <div class="bar">
            <div className="content-portfolio">
              A react app for fetching details of pokemons....
            </div>
            <div class="emptybar"></div>
            <div class="filledbar"></div>
          </div>
          <div class="circle">
            <a
              href="https://github.com/yung-coder/Pokemon-app"
              alt="enotes"
              target="blank"
            >
              {" "}
              <img src={github} alt="github" />
            </a>
          </div>
        </div>
      </div>
      <div className="introhead2">
        <h1>Opensource</h1>
      </div>
      <div className="open-source-projects">
        <div className="reactplay">
          <a href="https://reactplay.io/" target="blank">
           <img src={play} alt="" />
          </a>
          <div className="inforeact">
            <h1>React Play</h1>
            <p>React-play is an open-source web app that helps you learn ReactJS faster with a hands-on practice model. It is a collection of ReactJS projects that you can use to learn ReactJS.</p>
          </div>
        </div>
      </div>  
</div>
  );
};

export default index;
