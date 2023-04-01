import fs from "fs";
import { execFileSync, execSync } from "child_process";

const compilejava = (code, input) => {
  var pre, output;
  try {
    fs.writeFileSync("./operations/files/main.java", code);
  } catch (err) {
    return err.toString();
  }
  try {
    execSync("javac ./operations/files/main.java");
    execSync(
      "mv ./operations/files/main.class ./operations/binaries/main.class"
    );
  } catch (err) {
    return err.toString();
  }
  try {
    pre = execFileSync("java -cp ./operations/binaries main", {
      encoding: "utf-8",
      input: input,
    });
    output = pre.toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default compilejava;
