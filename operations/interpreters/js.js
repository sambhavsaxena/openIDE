import { spawn } from "child_process";
import fs from "fs";

const interpretjs = (code, input) => {
  var output;
  try {
    fs.writeFileSync("./operations/files/main.js", code);
  } catch (err) {
    return err.toString();
  }
  try {
    output = spawn("node", ["./operations/files/main.js"], {
      input: input,
      timeout: 5000,
      encoding: "utf-8",
    });
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretjs;
