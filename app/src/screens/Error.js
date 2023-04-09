import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error = () => {
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
        <div
          className="text-center"
          style={{ marginTop: "10%", marginBottom: "5%" }}
        >
          <h4>Aw snap!</h4>
          The page you were looking for could not be found.
        </div>
        <Link to="/">
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
