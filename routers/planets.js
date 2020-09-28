const express = require("express");
const controller = require("../services/planetsServices");

const recordsRouter = express.Router();

recordsRouter.get("/:page?", controller.read);
recordsRouter.post("/", controller.create);

module.exports = recordsRouter;
