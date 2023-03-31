import fs from "fs";
import { execSync } from "child_process";

const compilecpp = (code) => {
  var output;
  try {
    fs.writeFileSync("./operations/files/main.cpp", code);
  } catch (err) {
    return err.toString();
  }
  try {
    execSync("g++ ./operations/files/main.cpp -o ./operations/binaries/main");
  } catch (err) {
    return err.toString();
  }
  try {
    output = execSync("./operations/binaries/main").toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default compilecpp;
