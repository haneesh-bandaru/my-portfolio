import Image from "next/image";
import "./projects.css";
import { Button, Paper, Typography } from "@mui/material";
import { Github } from "lucide";
import gitEnabled from "../../assets/gitEnabled.png";
import gitDisabled from "../../assets/gitDisabled.png";
import project from "../../assets/project-Images/jntugv.png";
import calculator from "../../assets/project-Images/calculator.png";
import hopecare from "../../assets/project-Images/hopecare.jpeg";
import climatecompass from "../../assets/project-Images/climatecompass.jpeg";

const projectDetails = [
  {
    title: "University Website",
    titleImage: project,
    desc: "I have led the frontend for this project with my team.",
    website: "https://jntugv.edu.in/",
    gitImage: gitDisabled,
    gitLink: "",
    state: "true",
  },
  {
    title: "Hopecare",
    titleImage: hopecare,
    desc: "A real time application where you can find doctors around your locality and get their appointments.",
    website: "https://hopecure.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/hopecure",
    state: "",
  },
  {
    title: "Calculator App",
    titleImage: calculator,
    desc: "React-powered calculator app for effortless math magic – where simplicity meets precision.",
    website: "https://calculator-using-react.by-haneesh.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/Calculator_Using_react",
    state: "",
  },
  {
    title: "Climate Compass",
    titleImage: climatecompass,
    desc: "Explore the weather with ease using this simple and intuitive React-based weather app – your pocket-sized meteorologist",
    website: "https://climatecompass.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/hopecure",
    state: "",
  },
  // {
  //   title: "Climate Compass",
  //   titleImage: climatecompass,
  //   desc: "Explore the weather with ease using this simple and intuitive React-based weather app – your pocket-sized meteorologist",
  //   website: "https://climatecompass.vercel.app/",
  //   gitImage: gitEnabled,
  //   gitLink: "https://github.com/haneesh-bandaru/hopecure",
  //   state: "",
  // },
];

const Projects = () => {
  return (
    <main className="proMain">
      <Typography variant="h3">PROJECTS</Typography>
      <div>
        <div className="prodisplay">
          {projectDetails.map((item, index) => (
            <Paper key={index} className="proDiv" elevation={5}>
              <div>
                <Typography variant="h5">{item.title}</Typography>
                <Image
                  src={item.titleImage}
                  alt="hi"
                  height={150}
                  width={150}
                />
              </div>
              <div className="description-div">
                <Typography variant="body2">{item.desc}</Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  marginBlockStart: "auto",
                }}
                 className="buttons"
              >
                <Button variant="outlined" href={item.website} target="_blank">
                  Website
                </Button>
                <Button
                  variant="text"
                  href={item.gitLink}
                  target="_blank"
                  style={{ padding: "0" }}
                >
                  <Image src={item.gitImage} alt="github" height={36.5}></Image>
                </Button>
              </div>
            </Paper>
          ))}
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Projects;
