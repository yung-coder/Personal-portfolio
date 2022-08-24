import Loader from "react-loaders";
import { Link } from "react-router-dom";

import "./index.scss";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
const Home = () => {
  const [phrase,setphrase]=useState([]);
  const fetch = () => {
    axios
      .get('https://api.api-ninjas.com/v1/quotes?category=success',{
        headers: { 'X-Api-Key': '9S5WbSVQ17Jd/+8TQyYFVg==Cv3B7HWvZ8WzH38l'},
      })
      .then((response) => {
        console.log(response.data);
        setphrase(response.data);
      });
  };
  useEffect(()=>{
    fetch();
  },[])
  return (
    <>
      <div className="contanier home-page">
        <div className="text-zone">
          <section>
            <div className="content">
              <h2>Saksham</h2>
              <h2>Saksham</h2>
            </div>
          </section>
          <section>
            <div className="content2">
              <h2>Chandel</h2>
              <h2>Chandel</h2>
            </div>
          </section>
        <h2 className="desc">Javascript / Front-end / Reactjs / Nextjs </h2>
        <Link to="/contact" className="flag-button">CONTACT ME</Link>
        
      </div>
        {phrase.map((value)=>{
           return(
              <div className="quote">
                <h1>{value.quote}</h1>
                <span>-{value.author}</span>
              </div>
           );
          })}
      <div className="social-mobile-view">
      <ul>
          <li>
            <a target="blank_" rel='noreferrer' href='https://www.linkedin.com/in/saksham-chandel-yungcoder/'> 
              <FontAwesomeIcon icon={faLinkedin} color="#0072b1" />
            </a>
          </li>
          <li>
            <a target="blank_" rel='noreferrer' href='https://github.com/yung-coder'> 
              <FontAwesomeIcon icon={faGithub} color="#171515 " className="git"/>
            </a>
          </li>
          <li>
            <a target="blank_" rel='noreferrer' href='https://twitter.com/_yung_tweets_'> 
              <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
            </a>
          </li>
        </ul>
      </div>
      </div>
      {/* <Logo /> */}
      <Loader type="pacman" />
    </>
  );
};

export default Home;
