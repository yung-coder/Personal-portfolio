import Loader from "react-loaders";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-s.png";
import "./index.scss";
import Logo from "./logo";
const Home = () => {
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
      </div>
      <Logo />
      <Loader type="pacman" />
    </>
  );
};

export default Home;
