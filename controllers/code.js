import asyncHandler from "express-async-handler";
import axios from "axios"
import dotenv from "dotenv"
dotenv.config();

const ENDPOINT = process.env.ENDPOINT;
const ENDPOINT_2 = process.env.ENDPOINT_2;

const codeController = asyncHandler(async (req, res) => {
  var status, output, response;
  const { code, language, input } = req.body;
  const resp = await axios.post(ENDPOINT, {
    code,
    input,
    language: language,
    save: false
  });
  const url = `${ENDPOINT_2}/${resp.data.id}`
  do {
    const data = await axios.get(url);
    response = data.data;
    status = response.status;
    if (response.rntError) {
      output = response.rntError;
      break;
    }
    output = response.output ? response.output : response.cmpError;
  } while (status !== "SUCCESS");
  const ans = output.replace(/gfg/gi, '');
  return res.send({ ans });
});

export default codeController;
