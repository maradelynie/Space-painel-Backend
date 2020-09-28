const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const sha1 = require("sha1");

async function autenticate(req, res) {
  const { email, password } = req.body;
  if (!email) {
    res.status(401).send("No email found");
  }
  if (!password) {
    res.status(401).send("No password found");
  }
  try {
    const records = await usersModel.find({ email: email, senha: password });

    if (records.length < 1) {
      return res.status(401).send("Wrong credentials");
    } else {
      const token = sha1(Math.random());
      const addToken = await usersModel.findOneAndUpdate(
        { _id: records[0]._id },
        { token: token },
        { new: true, useFindAndModify: false }
      );

      res.send({ token: token });
    }
  } catch (error) {
    res.status(400).send({ res: false, error: error.message });
  }
}
async function validateToken(req, res) {
  const { token } = req.body;
  try {
    const records = await usersModel.find({
      token: token,
    });
    if (records.length >= 1) {
      res.send({ res: true });
    } else {
      res.send({ res: false });
    }
  } catch (error) {
    res.status(400).send({ res: false });
  }
}

const usersModel = require("../models/usersModel");

module.exports = { autenticate, validateToken };
