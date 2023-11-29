import { Paper, TextField, Typography } from "@mui/material";
import "./contactme.css";
import mail from "../../assets/mail.svg";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";

const contactme = () => {
  return (
    <div style={{ backgroundColor: "#9db2bf", justifyContent: "center" }}>
      <div className="contact-main">
        <div className="contact-text">
          <h4>Get in Touch</h4>
          <h1>Contact Me</h1>
          <div className="contact-info-upper-container">
            <div className="contact-info-container">
              <Image
                src={mail}
                alt="Email icon"
                className="icon contact-icon email-icon"
              />

              <p>
                <a href="mailto:haneeshbandaru@gmail.com">
                  haneeshbandaru@gmail.com
                </a>
              </p>
            </div>
            <div className="contact-info-container">
              <FaLinkedinIn className="icon contact-icon" />
              <p>
                <a href="https://www.linkedin.com">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p className="contact-text-p">
          Copyright ©️ 2023 Haneesh Bandaru. All Rights Reserved
        </p>
      </footer>
    </div>
  );
};
export default contactme;
