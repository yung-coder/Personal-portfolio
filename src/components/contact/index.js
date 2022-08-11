import { Input } from "postcss";
import Loader from "react-loaders";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <div contanier contact-page>
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia amet
            consequuntur aperiam quas assumenda incidunt debitis esse id?
            Voluptatum incidunt harum maiores. Architecto, illo.
          </p>
        <div className="contact-form">
          <form>
            <ul>
              <li className="half">
                <input type="text" name="name" placeholder="Name" required />
              </li>
              <li className="half">
                <input type="email" name="email" placeholder="email" required />
              </li>
              <li>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  required
                />
              </li>
              <li>
                <textarea
                  placeholder="Messgaes"
                  name="message"
                  required
                ></textarea>
              </li>
              <li>
                <input type="sumbit" className="flat-button" value="SEND" />
              </li>
            </ul>
          </form>
        </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
