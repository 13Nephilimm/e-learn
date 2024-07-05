"use client";

import "./Footer.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_hhhcitj",
          "template_mwurkt4",
          form.current,
          "0NA3KLjIitEBGl6tV"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      form.current.reset();
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-upper-container">
          <div className="privacy-box">
            <a
              href="./უსაფრთხოების შესახებ.pdf"
              className="privacy-heading"
              download
            >
              კონფიდენციალურობის პოლიტიკა
            </a>
          </div>
          <div className="terms-box">
            <a href="#" className="terms-heading">
              წესები და პირობები
            </a>
          </div>
          <form className="input-box" ref={form} onSubmit={sendEmail}>
            <input
              className="footer-email"
              type="email"
              name="email"
              placeholder="თქვენი მეილი"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="დატოვეთ შეტყობინება"
              className="footer-message"
              required
            ></textarea>
            <button type="submit" className="main-btn">
              გაგზავნა
            </button>
          </form>
        </div>
        <div className="footer-lower-container">
          <div className="footer-logo-box">
            <h2 className="logo">E-სწავლა</h2>
          </div>
          <div className="copyright-box">
            <p>
              &copy; 2024 <br /> by E-სწავლა
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
