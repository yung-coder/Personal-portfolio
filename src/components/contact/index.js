
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
const Contact = () => {
  const refForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ed7a0i9",
        "template_3krgw0t",
        refForm.current,
        "mW7tMDSy2F8rUY1Ig"
      )
      .then(
        () => {
          alert("Message send!");
          window.location.reload(false);
        },
        () => {
          alert("Failed to send");
        }
      );
  };
  return (
    <>
     
        <div className="text-zone">
          <h1 className="texth1cont">Contact me</h1>
          <p>
            Let's connect 👋
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="from_name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="from_name"
                    placeholder="email"
                    required
                  />
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
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            <div className="number">
              +91 7807717169
              <a href="tel:7807717169">
              <button className="button-29"><FontAwesomeIcon icon={faPhone}/></button>
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default Contact;
