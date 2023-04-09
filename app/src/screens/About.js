import React from "react";
import { Button } from "react-bootstrap";
import "./home.css";

const About = () => {
  return (
    <div style={{ height: "80vh" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "120px",
        }}
      >
        <h1 style={{ marginBottom: "5vh" }}>About Me</h1>
        <p className="text-center plain-text">
          So, I'm glad to see you're too excited to know about me:{")"}
          <br />
          <br />
          Here's a brief intro:
          <br />
          <br />I am Sambhav Saxena, and I'm always enthusiastic for building
          things that can bring about change.
          <br />
          In my free time, I write blogs about technology, world-polity, human
          behaviour, and about my personal experiences with life. You can visit
          my portfolio to read more about the projects I have developed, my
          experiences and recent updates.
        </p>
        <Button
          variant="outline-dark"
          target="_blank"
          href="https://interpreted.vercel.app"
          className="exp"
        >
          Portfolio
        </Button>
      </div>
    </div>
  );
};

export default About;
