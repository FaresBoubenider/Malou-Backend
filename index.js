import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3376;

dotenv.config();
app.use(cors());
// Redirects to the routes/index.js files.
app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});




