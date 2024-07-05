import React, { useRef } from "react";
import "./ContactSection.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <section id="contact" className="contact">
      <h1 className="contact-heading">კონტაქტი</h1>
      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-option-icon" />
            <h4>მეილი</h4>
            <h5>elearn@gmail.com</h5>
            <a
              href="mailto:jekokharabadze@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              მოგვწერეთ
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>E-სწავლა</h5>
            <a
              href="https://m.me/xarabadzejeko"
              target="_blank"
              rel="noopener noreferrer"
            >
              მოგვწერეთ
            </a>
          </article>
          <article className="contact-option">
            <AiOutlinePhone className="contact-option-icon" />
            <h4>ტელ. ნომერი</h4>
            <h5>+995 599 10 00 69</h5>
            <a href="#contact">დაგვირეკეთ</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="სახელი, გვარი" required />
          <input
            type="email"
            name="email"
            placeholder="თქვენი მეილი"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="დაგვიტოვეთ შეტყობინება"
            required
          ></textarea>
          <button className="main-btn" type="submit">
            გაგზავნა
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
