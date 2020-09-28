const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const planetsRouter = require("./routers/planets");
const rebelsRouter = require("./routers/rebels");
const usersRouter = require("./routers/users");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/spacePainel/planets", planetsRouter);
app.use("/spacePainel/rebels", rebelsRouter);
app.use("/spacePainel/users", usersRouter);

const { DB_CONNECTION } = process.env;
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Error - ${err}`);
    }
  }
);

const { connection } = mongoose;
connection.once("open", () => {
  connectedToMongoDB = true;
  const APP_PORT = process.env.PORT;
  app.listen(APP_PORT, () => {
    console.log(`Server on port ${APP_PORT}`);
  });
});
