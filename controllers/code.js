import asyncHandler from "express-async-handler";
import compilecpp from "../operations/compilers/cpp.js";
import interpretpy from "../operations/compilers/py.js";
import compilejava from "../operations/compilers/java.js";

const codeController = asyncHandler(async (req, res) => {
  const { code } = req.body;
  const { language } = req.body;
  var op;
  switch (language) {
    case "cpp":
      op = compilecpp(code);
      break;
    case "java":
      op = compilejava(code);
      break;
    case "py":
      op = interpretpy(code);
      break;
    default:
      return res.status(400);
  }
  return res.send({ op });
});

export default codeController;
