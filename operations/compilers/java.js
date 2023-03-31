import fs from "fs";
import { execSync } from "child_process";

const compilejava = (code) => {
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
    pre = execSync("java -cp ./operations/binaries main");
    output = pre.toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default compilejava;
