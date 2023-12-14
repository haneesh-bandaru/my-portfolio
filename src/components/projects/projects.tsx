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
    desc: `As the Front-End Lead for our university website, I spearheaded the development of a comprehensive
    platform—a one-stop solution for every student. We meticulously crafted a user-friendly interface and
    experience, ensuring seamless navigation.`,
    website: "https://jntugv.edu.in/",
    gitImage: gitDisabled,
    gitLink: "",
    state: "true",
  },
  {
    title: "Hopecare",
    titleImage: hopecare,
    desc: `HopeCare, a pioneering application, transforms healthcare access by connecting users with local doctors,
            allowing appointments irrespective of the doctor's hospital. It features two search options—geographical
            and profession-based—providing a streamlined and personalized healthcare experience.`,
    website: "https://hopecure.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/hopecure",
    state: "",
  },
  {
    title: "Calculator App",
    titleImage: calculator,
    desc: `Experience the power of seamless calculations with our React Calculator App. Engineered 
          with the latest web technologies, this application combines the efficiency of React.js 
          with an intuitive user interface, delivering a responsive and interactive calculator experience.`,
    website: "https://calculator-using-react.by-haneesh.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/Calculator_Using_react",
    state: "",
  },
  {
    title: "Climate Compass",
    titleImage: climatecompass,
    desc: `Climate Compass is an intuitive application meticulously crafted for obtaining real-time weather updates
          globally through a user-friendly search interface. Stay informed about weather conditions across the world
          effortlessly with Climate Compass`,
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
    <main className="proMain" id="projects">
      <Typography variant="h3">PROJECTS</Typography>
      <div>
        <div className="prodisplay">
          {projectDetails.map((item, index) => (
            <Paper style={{minWidth:"21em"}} key={index} className="proDiv" elevation={5}>
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
                <Typography variant="body1" className="description-desc">
                  {item.desc}
                </Typography>
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
                  View Project
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
