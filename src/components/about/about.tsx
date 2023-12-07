import Image from "next/image";
import "./about.css";
import pc from "../../assets/OIG.jpeg";
import { Paper, Typography } from "@mui/material";
import experience from "../../assets/experience.png";
import education from "../../assets/education.png";
import myImg from "../../assets/HaneeshBandaru.png";

const About = () => {
  return (
    <main
      className="about-main"
      style={{
        backgroundColor: "#9DB2BF",
        height: "75vh",
        paddingLeft: "5vw",
      }}
    >
      <div className="textDiv">
        <Typography variant="h3">ABOUT ME</Typography>
      </div>
      <div className="about-div">
        <div className="about-left">
          <Image src={myImg} alt="" height={"500"} width={"500"}/>
        </div>
        <div className="about-right">
          <div className="about-mid">
            <div className="details-container">
              <Image
                src={experience}
                alt="Experience icon"
                className="icon"
                width={32}
                height={32}
              />
              <h3>Experience</h3>
              <p>
                1+ years <br />
                Frontend Development
              </p>
            </div>
            <div className="details-container">
              <Image
                src={education}
                alt="Experience icon"
                className="icon"
                width={32}
                height={32}
              />
              <h3>Education</h3>
              <p>
                B.Tech @ <br />
                JNTU-GV
              </p>
            </div>
          </div>
          <div className="about-me-text">
            {`Hello! I'm Haneesh Bandaru, an experienced web developer with over a
          year of hands-on experience crafting dynamic and user-friendly digital
          experiences. Specializing in frontend development using React JS,
          Angular JS, and Next JS, I ensure seamless and responsive user
          interfaces. On the backend, I excel in utilizing Node JS and Spring
          Boot to create robust and scalable server-side applications. With a
          passion for clean, efficient code, I bring a keen eye for detail to
          every project. Let's build the future of the web together, one line of
          code at a time!`}
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
