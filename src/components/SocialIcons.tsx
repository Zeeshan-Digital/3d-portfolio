import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;
      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;
        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);
        requestAnimationFrame(updatePosition);
      };
      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };
      document.addEventListener("mousemove", onMouseMove);
      updatePosition();
      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);
  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://github.com/Zeeshan-Digital/" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/zeeshanwaseem12345/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="https://www.instagram.com/zeeshanin2008/" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </span>
        <span>
          <a href="https://www.facebook.com/profile.php?id=100044316740688" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
        </span>
        <span>
          <a href="https://wa.me/923152941173" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
        </span>
      </div>
      <a className="resume-button" href="/Zeeshan_Ahmed.pdf" target="_blank" rel="noreferrer">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};
export default SocialIcons;
