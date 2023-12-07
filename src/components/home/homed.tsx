import Image from "next/image";
import "./home.css";
import haneeshImage from "../../assets/HaneeshBandaru.png";
import { Button } from "@mui/material";
import { TypeAnimation } from "react-type-animation";
import { MdCode } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Homed = () => {
  return (
    <main className="aboutdiv">
      <div className="nameDiv">
        <h2 data-aos="fade-up">{`Hey, I'm Haneesh Bandaru`}</h2>
        <div>
          <TypeAnimation
            data-aos="fade-up"
            sequence={["Web Developer", 2000, "Freelancer", 2000, ""]}
            speed={30}
            wrapper="h4"
            repeat={Infinity}
            className="role-animation"
          />
          <div data-aos="fade-up" className="home-buttons">
            <Button variant="contained" style={{ backgroundColor: "#27374D" }}>
              Contact
            </Button>
            <Button
              variant="contained"
              style={{ color: "#27374D", backgroundColor: "#ffffff" }}
            >
              Resume
            </Button>
          </div>
          <div className="icons-container">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="icons-div"
            >
              <p>
                <a href="https://github.com/haneesh-bandaru" target="_blank">
                  {" "}
                  <AiFillGithub className="home-icons" />{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/haneesh-bandaru/"
                  target="_blank"
                >
                  {" "}
                  <FaLinkedinIn className="home-icons" />{" "}
                </a>
              </p>
              <p>
                <a
                  href="https://www.instagram.com/ig.hanee.11/"
                  target="_blank"
                >
                  <AiFillInstagram className="home-icons" />
                </a>
              </p>
              <p>
                <a href="https://g.dev/haneeshbandaru" target="_blank">
                  <MdCode className="home-icons" />
                </a>
              </p>
              <p>
                <a href="https://twitter.com/haneesh_bandaru" target="_blank">
                  {" "}
                  <FaSquareXTwitter className="home-icons" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="image-box">
        {" "}
        <Image
          src={haneeshImage}
          alt="Picture of the Haneesh"
          className="imagebox"
        />
      </div>
    </main>
  );
};

export default Homed;
