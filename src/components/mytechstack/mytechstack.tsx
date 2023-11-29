import Link from "next/link";
import Paper from "@mui/material/Paper";
import "./mytechstack.css";
import { Typography } from "@mui/material";

const frontend = [
  { image: "", name: "React js" },
  { image: "", name: "Next js" },
  { image: "", name: "React Native" },
  { image: "", name: "Github" },
  { image: "", name: "Figma" },
  { image: "", name: "Git" },
  { image: "", name: "Java" },
  { image: "", name: "HTML" },
  { image: "", name: "CSS" },
  { image: "", name: "VS Code" },
];

const backend = [
  { image: "", name: "Mongo db" },
  { image: "", name: "Postgres SQL" },
  { image: "", name: "Firebase" },
  { image: "", name: "Express js" },
];

const Experience = () => {
  return (
    <main className="expMain">
      <div className="techText">
        <Typography variant="h3">MY PROFICIENCIES</Typography>
      </div>
      <div className="techDiv">
        <Paper className="frontendDiv" elevation={24}>
          <Typography
            variant="h4"
            style={{ marginBottom: "auto", paddingRight: 10 }}
          >
            Frontend
          </Typography>
          {frontend.map((item, index) => (
            <div key={index}>
              <Typography>{item.image}</Typography>
              <Typography>{item.name}</Typography>
            </div>
          ))}
        </Paper>
        <Paper className="backendDiv" elevation={24}>
          <Typography
            variant="h4"
            style={{ marginBottom: "auto", paddingRight: 10 }}
          >
            Backend
          </Typography>
          {backend.map((item, index) => (
            <div key={index}>
              <Typography>{item.image}</Typography>
              <Typography>{item.name}</Typography>
            </div>
          ))}
        </Paper>
      </div>
    </main>
  );
};

export default Experience;
