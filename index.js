import express from "express";
import dotenv from "dotenv";
import submitCodeRoutes from "./routes/code/submitRoutes.js";
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 2011;

app.use(cors());
app.use(express.json());
app.use("/api/submit", submitCodeRoutes);

app.get("/", (req, res) => {
  res.send("Server alive");
});

app.listen(PORT, () => {
  console.log(`Living @${PORT}`);
});
