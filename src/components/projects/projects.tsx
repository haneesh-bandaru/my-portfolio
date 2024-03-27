"use client";
import { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./projects.css";

import trailImage from "@/assets/images/trailImage.jpg";
import projectDetails from "@/assets/data/projectDetails";

const Projects = () => {
  const [activeItem, setActiveItem] = useState("All");

  // Filter projects based on activeItem
  const filteredProjects =
    activeItem === "All"
      ? projectDetails
      : projectDetails.filter((project) => project.category === activeItem);
  return (
    <section className="proMain" id="projects">
      <Typography variant="h3">PROJECTS</Typography>
      <nav className="flex bg-textColor justify-center mx-auto w-fit px-6 py-2 rounded-2xl shadow-lg">
        <ul className="flex gap-10 items-center ">
          <li
            className={`px-4 py-1 rounded-xl transition-colors duration-300 ${
              activeItem === "All" ? "bg-gray-50 shadow-md" : "text-white"
            }`}
            onClick={() => setActiveItem("All")}
          >
            All
          </li>
          <li
            className={`px-4 py-1 rounded-xl transition-colors duration-300 ${
              activeItem === "Web" ? "bg-gray-50 shadow-md" : "text-white"
            }`}
            onClick={() => setActiveItem("Web")}
          >
            Web
          </li>
          <li
            className={`px-4 py-1 rounded-xl transition-colors duration-300 ${
              activeItem === "Android" ? "bg-gray-50 shadow-md" : "text-white"
            }`}
            onClick={() => setActiveItem("Android")}
          >
            Android
          </li>
        </ul>
      </nav>
      <div>
        <div className="prodisplay">
          {filteredProjects.map((item, index) => (
            <Paper
              style={{ minWidth: "21em" }}
              key={index}
              className="proDiv"
              elevation={5}
            >
              <div>
                <Typography variant="h5">{item.title}</Typography>
                <Image
                  src={item.titleImage || trailImage}
                  alt="hi"
                  height={150}
                  width={150}
                />
              </div>
              <div className="description-div">
                <Typography variant="body1" className="description-desc">
                  {item.desc.slice(0, 90)}...
                  <Link
                    href={`/projects/${item.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="text-blue-600"
                  >
                    View more
                  </Link>
                </Typography>
              </div>
              <div className="buttons">
                <Button
                  variant="outlined"
                  href={item.website}
                  target="_blank"
                  style={{ color: "white", backgroundColor: "#27374D" }}
                >
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
    </section>
  );
};

export default Projects;
