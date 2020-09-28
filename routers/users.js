const express = require("express");
const controller = require("../services/usersServices");

const recordsRouter = express.Router();

recordsRouter.post("/", controller.autenticate);
recordsRouter.get("/validate", controller.validateToken);

module.exports = recordsRouter;
