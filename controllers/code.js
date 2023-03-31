import asyncHandler from "express-async-handler";
import compilecpp from "../operations/compilers/cpp.js";

const codeController = asyncHandler(async (req, res) => {
  const { code } = req.body;
  const { language } = req.body;
  var op;
  switch (language) {
    case "cpp":
      op = compilecpp(code);
      break;
    default:
      return res.status(400);
  }
  return res.send({ op });
});

export default codeController;
