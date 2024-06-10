import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import ROUTES from "./routes/routes";

const app = express();
const PORT = process.env.PORT || 4900;

// middlewares --------------------
app.use(express.json());
app.use(morgan("dev"));
app.use(ROUTES);
// --------------------------------

app
  .listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
