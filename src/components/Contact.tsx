import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              
                href="https://www.linkedin.com/in/zeeshanwaseem12345/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — zeeshanwaseem12345
              </a>
            </p>
            <h4>Education</h4>
            <p>Intermediate, Aisha Bawany Government College</p>
            <p>Digital Marketing Certification, SZABIST ZabTech</p>
            <p>Digital Skills Certificate (MS Office & Spoken English), NDA</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            
              href="https://github.com/Zeeshan-Digital/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            
              href="https://www.linkedin.com/in/zeeshanwaseem12345/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            
              href="https://www.instagram.com/zeeshanin2008/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
            
              href="https://www.facebook.com/profile.php?id=100044316740688"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Facebook <MdArrowOutward />
            </a>
            
              href="https://wa.me/923152941173"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              WhatsApp <MdArrowOutward />
            </a>
            
              href="mailto:zeeshanin2020@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Zeeshan Ahmed</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
