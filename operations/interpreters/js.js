import { exec } from "child_process";
import fs from "fs";

const interpretjs = (code, input) => {
  var output;
  try {
    fs.writeFileSync("./operations/files/main.js", code);
  } catch (err) {
    return err.toString();
  }
  try {
    exec("node ./operations/files/main.js", (err, stdout, stderr) => {
      if (err) {
        output = err.toString();
      } else if (stderr) {
        output = stderr.toString();
      } else output = stdout.toString();
    });
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretjs;
