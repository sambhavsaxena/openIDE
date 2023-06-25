import { execFileSync } from "child_process";

const interpretjs = (code, input) => {
  var output;
  try {
    output = execFileSync("node", ["-e", code], {
      input: input,
      timeout: 5000,
      encoding: "utf-8",
    }).toString();
  } catch (err) {
    return err.toString();
  }
  return output;
};

export default interpretjs;
