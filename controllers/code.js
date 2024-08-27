import asyncHandler from "express-async-handler";
import compilecpp from "../operations/compilers/cpp.js";
import compilejava from "../operations/compilers/java.js";
import interpretpy from "../operations/interpreters/py.js";
import interpretjs from "../operations/interpreters/js.js";
import vulnerable_libraries from "../utils/vulnerable_libraries.js";

const VULNERABLE_ERROR_RESPONSE =
  "Execution blocked! Found vulnurable source. Try again, hahahaha";

const check_vulnerable_libraries = (stream) => {
  const lines = stream.split("\n");
  for (let line of lines) {
    for (let include of vulnerable_libraries) {
      if (line.includes(include)) {
        return true;
      }
    }
  }
  return false;
};

const codeController = asyncHandler(async (req, res) => {
  const { code, language, input } = req.body;
  if (check_vulnerable_libraries(code))
    return res.send({ op: VULNERABLE_ERROR_RESPONSE });
  var op;
  switch (language) {
    case "cpp":
      op = compilecpp(code, input);
      break;
    case "py":
      op = interpretpy(code, input);
      break;
    case "js":
      op = interpretjs(code, input);
      break;
    case "java":
      op = compilejava(code, input);
      break;
    default:
      return res.status(400);
  }
  return res.send({ op });
});

export default codeController;
