import React, { useState } from "react";
import "./timelineevent.css";

import Typography from "@mui/material/Typography";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  p: 4,
};

const TimelineEvent = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDivClick = () => {
    setIsDisplayed(!isDisplayed);
  };

  const timelineData = [
    {
      time: "9:30 am",
      icon: "react",
      color: "primary",
      title: "Eat",
      description: "Because you need strength",
    },
    {
      time: "10:00 am",
      icon: "angular",
      color: "secondary",
      title: "Code",
      description: "Because it's awesome!",
    },
    {
      time: null,
      icon: "html",
      color: "primary",
      title: "Sleep",
      description: "Because you need rest",
    },
    {
      time: null,
      icon: "html",
      color: "secondary",
      title: "Web Development Intern",
      description: "The Sparks Foundation",
    },
  ];

  return (
    <main className="timeline-main">
      <div className="textDiv">
        <Typography variant="h3">EXPERIENCE</Typography>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </main>
  );
};

export default TimelineEvent;
