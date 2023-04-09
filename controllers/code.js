import asyncHandler from "express-async-handler";
import compilecpp from "../operations/compilers/cpp.js";
import compilejava from "../operations/compilers/java.js";
import interpretpy from "../operations/interpreters/py.js";
import interpretjs from "../operations/interpreters/js.js";

const codeController = asyncHandler(async (req, res) => {
  const { code } = req.body;
  const { language } = req.body;
  const { input } = req.body;
  var op;
  switch (language) {
    case "cpp":
      op = compilecpp(code, input);
      break;
    case "js":
      op = interpretjs(code);
      break;
    case "java":
      op = compilejava(code);
      break;
    case "py":
      op = interpretpy(code, input);
      break;
    default:
      return res.status(400);
  }
  return res.send({ op });
});

export default codeController;
