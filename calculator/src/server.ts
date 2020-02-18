import express from "express";
import cors from "cors";
import helmet from "helmet";
import calculateRouter from "./routes/calculate";

const port = process.env.PORT || 3000;
const apiVersion = '/api/v1'
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use(`${apiVersion}/calculate`, calculateRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
