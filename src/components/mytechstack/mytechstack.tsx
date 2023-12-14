import Image from "next/image";
import "./mytechstack.css";
import { Stack, Typography } from "@mui/material";
import react from "../../assets/tech-stack/react.svg";
import next from "../../assets/tech-stack/next.svg";
import Github from "../../assets/tech-stack/github.svg";
import figma from "../../assets/tech-stack/figma.svg";
import git from "../../assets/tech-stack/git.svg";
import java from "../../assets/tech-stack/java.svg";
import html from "../../assets/tech-stack/html.svg";
import css from "../../assets/tech-stack/css.svg";
import vscode from "../../assets/tech-stack/vscode.svg";
import angular from "../../assets/tech-stack/angularjs.svg";

const stack = [
  { image: react, name: "React js" },
  { image: next, name: "Next js" },
  { image: react, name: "React Native" },
  { image: Github, name: "Github" },
  
  { image: figma, name: "Figma" },
  { image: git, name: "Git" },
  { image: java, name: "Java" },
  { image: html, name: "HTML" },
  { image: css, name: "CSS" },
  { image: vscode, name: "VS Code" },
  { image: angular, name: "Angular" },
];

const Experience = () => {
  return (
    <main className="expMain">
      <div className="techText">
        <Typography variant="h3">MY PROFICIENCIES</Typography>
      </div>
      <Stack className="techDiv" direction={"row"} spacing={2}>
        {stack.map((item, index) => (
          <div key={index} className="mytech-display">
            <Image src={item.image} height={32} width={32} alt="logo" />
            <Typography variant="h6"> {item.name}</Typography>
          </div>
        ))}
      </Stack>
    </main>
  );
};

export default Experience;