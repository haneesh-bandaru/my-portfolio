import Image from "next/image";
import "./about.css";
// import pc from "@/assets/images/OIG.jpeg";
import { Typography } from "@mui/material";
import experience from "@/assets/images/experience.png";
import education from "@/assets/images/education.png";

const About = () => {
  return (
    <main
      id="about"
      className="about-main1"
      style={{
        backgroundColor: "#9DB2BF",
        paddingLeft: "5vw",
      }}
    >
      <div className="textDiv2">
        <Typography variant="h3">ABOUT ME</Typography>
      </div>
      <div className="about-div">
        {/* <div className="about-left">
          <Image src={myImg} alt="" height={"500"} width={"500"}/>
        </div> */}
        <div className="about-right">
          <div className="about-mid">
            <div className="details-container">
              <Image
                src={experience}
                alt="Experience icon"
                className="mx-auto"
                width={32}
                height={32}
              />
              <Typography variant="h5">Experience</Typography>
              <Typography variant="body1">
                1+ years <br />
                Frontend Development
              </Typography>
            </div>
            <div className="details-container">
              <Image
                src={education}
                alt="Experience icon"
                className="mx-auto"
                width={32}
                height={32}
              />
              <Typography variant="h5">Education</Typography>
              <Typography variant="body1">
                B.Tech @ <br />
                JNTU-GV
              </Typography>
            </div>
          </div>
          <div className="about-me-text">
            <Typography variant="h5">
              {`Hello! I'm Haneesh Bandaru, an experienced web developer with over a
          year of hands-on experience crafting dynamic and user-friendly digital
          experiences. Specializing in frontend development using React JS,
          Angular JS, and Next JS, I ensure seamless and responsive user
          interfaces. On the backend, I excel in utilizing Node JS and Spring
          Boot to create robust and scalable server-side applications. With a
          passion for clean, efficient code, I bring a keen eye for detail to
          every project. Let's build the future of the web together, one line of
          code at a time!`}
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
