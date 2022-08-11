import { EmailJSResponseStatus } from "@emailjs/browser";
import { Input } from "postcss";
import { useRef } from "react";
import Loader from "react-loaders";
import emailjs from '@emailjs/browser'
import "./index.scss";

const Contact = () => {
  const refForm = useRef();

  const sendEmail =(e) =>{
     e.preventDefault()

     emailjs
       .sendForm(
          'service_ed7a0i9',
          'template_3krgw0t',
          refForm.current,
          'mW7tMDSy2F8rUY1Ig'
       )
       .then(
         () => {
           alert('Message send!');
           window.location.reload(false)
         },
         ()=>{
           alert('Failed to send');
         }
       )
  }
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
          <form ref={refForm} onSubmit={sendEmail}>
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
                <input type="submit" className="flat-button" value="SEND" />
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
