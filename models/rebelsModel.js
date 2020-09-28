const mongoose = require("mongoose");

let schemaRebels = mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  origem: {
    type: String,
    required: true,
  },
  especie: {
    type: String,
    required: true,
  },
});

const rebelsModel = mongoose.model("rebels", schemaRebels, "rebels");

module.exports = rebelsModel;
