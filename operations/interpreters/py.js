import { execFileSync } from "child_process";
import fs from "fs";

const interpretpy = (code, input) => {
  var output;
  try {
    fs.writeFileSync("./operations/files/main.py", code);
  } catch (err) {
    return err.toString();
  }
  try {
    output = execFileSync("python3", ["./operations/files/main.py"], {
      input: input,
      timeout: 5000,
      encoding: "utf-8",
    });
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretpy;
