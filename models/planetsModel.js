const mongoose = require("mongoose");

let schemaPlanets = mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    setor: {
      type: String,
      required: true,
    },
    dominio: {
      type: Boolean,
      required: true,
    },
    regiao: {
      type: String,
      required: true,
    },
    habitantes: {
      type: Number,
      required: true,
    },
  },
  { collection: "planets" }
);

const planetsModel = mongoose.model("planets", schemaPlanets, "planets");

module.exports = planetsModel;
