const mongoose = require("mongoose");

let schemaUsers = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
  token: {
    type: String,
  },
});

const usersModel = mongoose.model("users", schemaUsers, "users");

module.exports = usersModel;
