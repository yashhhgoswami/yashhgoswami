import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:yashhhgoswami@gmail.com" data-cursor="disable">
                yashhhgoswami@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>+91-7850032749</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/yashhhgoswami"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/yashhhgoswami/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://drive.google.com/file/d/1OOyyO3OxHp-IAvKkdg50PYKWba7ZSRfI/view?usp=sharing"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Resume <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/yashhhgoswami/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Yash Goswami</span>
            </h2>
            <h5>
              <MdCopyright /> Yash Goswami all rights reserved 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
