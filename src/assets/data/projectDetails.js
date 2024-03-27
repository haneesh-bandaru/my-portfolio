import react from "@/assets/images/tech-stack/react.svg";
import gitEnabled from "@/assets/images/gitEnabled.png";
import gitDisabled from "@/assets/images/gitDisabled.png";
import project from "@/assets/images/project-Images/jntugv.png";
import calculator from "@/assets/images/project-Images/calculator.png";
import hopecare from "@/assets/images/project-Images/hopecare.jpeg";
import climatecompass from "@/assets/images/project-Images/climatecompass.jpeg";
import gemini from "@/assets/images/gemini.png";
import next from "@/assets/images/tech-stack/next.svg";
import figma from "@/assets/images/tech-stack/figma.svg";
import angular from "@/assets/images/tech-stack/angularjs.svg";
import material from "@/assets/images/material-ui.svg";
import expo from "@/assets/images/expo.svg";

import clg1 from "@/assets/images/project-Images/clg1.png";
import clg2 from "@/assets/images/project-Images/clg2.png";
import clg3 from "@/assets/images/project-Images/clg3.png";

import cc1 from "@/assets/images/project-Images/cc1.png";
import cc2 from "@/assets/images/project-Images/cc2.png";

import gcb1 from "@/assets/images/project-Images/gcb1.jpeg";
import gcb2 from "@/assets/images/project-Images/gcb2.jpeg";

import hc1 from "@/assets/images/project-Images/hc1.png";
import hc2 from "@/assets/images/project-Images/hc2.png";

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
    category: "Web",
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "Material UI", image: figma },
    ],
    images: [clg1, clg2, clg3],
  },
  {
    title: "Gemini Api GPT",
    titleImage: gemini,
    desc: `Gemini Chatbot Mobile App, powered by Expo, revolutionizes user interactions with its intuitive chat interface. Seamlessly integrated across iOS and Android platforms, it offers personalized recommendations and instant responses to user inquiries. With multi-language support and robust security measures, Gemini ensures a tailored and secure experience for users worldwide.`,
    website: "https://example.com/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/gemini-chatbot",
    category: "Android", // Assigning category to each project
    techUsed: [
      { tech: "React Native", image: react },
      { tech: "Expo", image: expo },
    ],
    images: [gcb1, gcb2],
  },
  {
    title: "Hopecare",
    titleImage: hopecare,
    desc: `HopeCare, a pioneering application, transforms healthcare access by connecting users with local doctors,
            allowing appointments irrespective of the doctor's hospital. It features two search options—geographical
            and profession-based—providing a streamlined and personalized healthcare experience.`,
    website: "https://hopecare.vercel.app/",
    gitImage: gitEnabled,
    gitLink: "https://github.com/haneesh-bandaru/hopecure",
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "Angular Js", image: angular },
    ],
    images: [hc1, hc2],
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
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "Material UI", image: material },
    ],
    images: [calculator],
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
    category: "Web", // Assigning category to each project
    techUsed: [
      { tech: "React Js", image: react },
      { tech: "Material UI", image: material },
    ],
    images: [cc1, cc2],
  },
];

export default projectDetails;
