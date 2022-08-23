import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import "./index.scss";
// import Logo from "./logo";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
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
            <div class="content">
              <h2>Saksham</h2>
              <h2>Saksham</h2>
            </div>
          </section>
          <section>
            <div class="content2">
              <h2>Chandel</h2>
              <h2>Chandel</h2>
            </div>
          </section>
        <h2 className="desc">Javascript / Front-end / React / Nextjs </h2>
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
      </div>
      {/* <Logo /> */}
      <Loader type="pacman" />
    </>
  );
};

export default Home;
