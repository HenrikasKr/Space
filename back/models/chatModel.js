const mongoose = require("mongoose");

// DB schema
const chatSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  content: {
    type: String,
  }
});

// Modelis DB lentelės pavadinimas
const Chat = new mongoose.model("Chat", chatSchema);

module.exports = Chat;
