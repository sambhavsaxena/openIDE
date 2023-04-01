import { exec } from "child_process";
import fs from "fs";

const interpretjs = (code) => {
  var output, input;
  try {
    fs.writeFileSync("./operations/files/main.js", code);
  } catch (err) {
    return err.toString();
  }
  try {
    output = exec("node ./operations/files/main.js").toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretjs;
