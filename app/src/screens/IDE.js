import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Dropdown, Card, Placeholder } from "react-bootstrap";
import Loading from "../components/Loading";
import CodeEditor from "@uiw/react-textarea-code-editor";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./home.css";
import { languages, URL } from "../data.js";

toast.configure();

const IDE = () => {
  const [response, setResponse] = useState("");
  const [language, setLanguage] = useState(languages[0]);
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(language.snippet);
  const [input, setInput] = useState("");
  const ENDPOINT = URL;

  useEffect(() => {
    setCode(language.snippet);
  }, [language]);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await axios.post(ENDPOINT, {
        code,
        input,
        language: language.type,
      });
      setResponse(res.data.op);
      setLoading(false);
    } catch (err) {
      toast.error(`${err}`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      setLoading(false);
    }
  };

  const handlekeys = (e) => {
    e.preventDefault();
    if (e.shiftKey && e.keyCode === 13) {
      fetch();
    }
  };

  return (
    <>
      <div style={{ minHeight: "90vh" }}>
        <div className="playground">
          <div className="editors">
            <div className="editx">
              <CodeEditor
                data-color-mode="dark"
                value={code}
                language={language.type}
                placeholder="Write your code here"
                onKeyDown={(e) => {
                  handlekeys(e);
                }}
                onChange={(e) => setCode(e.target.value)}
                style={{
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                  minHeight: "60vh",
                }}
              />
            </div>
            <div className="panel">
              <div className="editx output">
                <CodeEditor
                  data-color-mode="dark"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter your input here"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "400",
                    minHeight: "20vh",
                  }}
                />
              </div>
              <div className="editx output">
                {loading ? (
                  <Card
                    style={{
                      backgroundColor: "#161b22",
                      minHeight: "20vh",
                      overflow: "hidden",
                    }}
                  >
                    <Card.Body>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={6} />
                      </Placeholder>
                      <Placeholder as={Card.Text} animation="glow">
                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                        <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                        <Placeholder xs={8} />
                      </Placeholder>
                    </Card.Body>
                  </Card>
                ) : (
                  <CodeEditor
                    disabled
                    data-color-mode="dark"
                    value={response}
                    placeholder="Output will be rendered here"
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: "400",
                      minHeight: "20vh",
                    }}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="button">
              <Dropdown>
                <Dropdown.Toggle variant="outline-success" id="dropdown-basic">
                  {language.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {languages.map((lang) => (
                    <Dropdown.Item
                      onClick={() => setLanguage(lang)}
                      key={lang.type}
                    >
                      {lang.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <div className="run">
                {loading ? (
                  <Loading />
                ) : (
                  <Button variant="outline-dark" onClick={fetch}>
                    Submit
                  </Button>
                )}
              </div>
            </div>
            <div className="plain-text marginx">
              You can try out anything in this playground. I want you to crash
              the IDE however you want. I'll be happy to see you find more bugs.
              In case you find any (which you probably will), you can mail me
              about them. I'd be happy to fix. Or maybe we could even work
              together on this?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IDE;
