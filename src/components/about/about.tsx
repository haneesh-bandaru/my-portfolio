import Image from "next/image";
import "./about.css";
import pc from "../../assets/animated-pictures-of-computers-30.jpg";
import { Paper, Typography } from "@mui/material";

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
        <Typography variant="h3">About Me</Typography>
      </div>
      <div className="about-mid">
        <Paper className="imageTextWeb" elevation={16}>
          <Typography variant="body1">
            {` Hello! I'm Haneesh Bandaru, an experienced web developer 
            with over a year of hands-on experience crafting dynamic and 
            user-friendly digital experiences. Specializing in frontend 
            development using React JS, Angular JS, and Next JS, I ensure 
            seamless and responsive user interfaces. On the backend, I excel
             in utilizing Node JS and Spring Boot to create robust and scalable 
             server-side applications. With a passion for clean, efficient code,
              I bring a keen eye for detail to every project. Let's build the 
              future of the web together, one line of code at a time!`}
          </Typography>
        </Paper>

        <Paper className="imageTextPhone" elevation={16}>
          <Typography variant="body1">
            {` Hello! I'm Haneesh Bandaru, a seasoned web 
            developer with expertise in frontend technologies
            like React JS, Angular JS, and Next JS. Proficient 
            in backend development using Node JS and Spring Boot.
            I'm passionate about crafting clean, efficient code
            and building seamless digital experiences. 
            Let's shape the future of the web together!`}
          </Typography>
        </Paper>
        <div className="about-image">
          <Image
            src={pc}
            width={350}
            height={350}
            className="aboutImage"
            alt="image"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
