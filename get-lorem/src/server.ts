const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const mongoose = require("mongoose");
require('dotenv').config()

const port = process.env.PORT || 3000;

const loremRouter = require("./routes/lorem");

mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/api/v1/lorem", loremRouter);

app.listen(port, () => console.log(`Server is running on ${port}`));
