const express = require("express");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
const port = process.env.PORT || 3000;
const loremRouter = require("./routes/lorem");
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use("/api/v1/lorem", loremRouter);
app.listen(port, () => console.log(`Server is running on ${port}`));
//# sourceMappingURL=server.js.map