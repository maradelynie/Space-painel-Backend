const express = require("express");
const controller = require("../services/rebelsServices");

const recordsRouter = express.Router();

recordsRouter.get("/:page?", controller.read);

module.exports = recordsRouter;
