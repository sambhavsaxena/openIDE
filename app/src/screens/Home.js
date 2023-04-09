import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
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
        <h1 className="head">
          {"{ "} OPEN IDE {" }"}
        </h1>
        <p
          className="text-center"
          style={{ marginLeft: "20px", marginRight: "20px", maxWidth: "60%" }}
        >
          Hi, you're at Open IDE's home.
          <br />
          The source of this project has been made open for all but the servers
          cannot yet afford to have open end-points [how ironic], which could
          result in heavy traffic and ultimately, server slowdown. OpenIDE
          depends on third party services to host its backend, which supports only shared-hosting on their free plan, causing higher latency and slower response. I'm working on a solution to this problem.
          <br />
          <br />
          Until then, you can read more about the architecture of Open IDE or
          explore its working.
        </p>
        <div className="explore">
          <Link className="url" to={"/ide"}>
            <Button variant="outline-dark" className="exp">
              Explore IDE
            </Button>
          </Link>
          <Button
            variant="outline-dark"
            target="_blank"
            href="https://interpreted.vercel.app/blog/open-ide-architecture"
            className="exp"
          >
            Architecture
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
