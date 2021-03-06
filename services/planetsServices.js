const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

async function read(req, res) {
  const token = req.headers.auth;
  const session = await usersModel.find({ token: token });

  if (token && session.length >= 1) {
    try {
      const records = await planetsModel.find();

      res.send({ res: true, records: records });
    } catch (error) {
      res.status(400).send({ res: false, error: error.message });
    }
  } else {
    res.status(404).send("No Session");
  }
}
async function create(req, res) {
  const token = req.headers.auth;
  const session = await usersModel.find({ token: token });

  if (token && session.length >= 1) {
    try {
      const record = new planetsModel(req.body);
      await record.save();
      res.send({ res: true, newRecord: record });
    } catch (error) {
      res.status(400).send({ res: false, error: error.message });
    }
  } else {
    res.status(404).send("No Session");
  }
}

const planetsModel = require("../models/planetsModel");
const usersModel = require("../models/usersModel");

module.exports = { read, create };
