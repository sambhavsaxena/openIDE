import { spawn } from "child_process";
import fs from "fs";

const interpretpy = (code) => {
  var output;
  try {
    fs.writeFileSync("./operations/files/main.py", code);
  } catch (err) {
    return err.toString();
  }
  try {
    output = spawn("python", ["./operations/files/main.py"], {
      detached: true,
      stdio: "inherit",
    }).toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretpy;
