const Chat = require("../models/chatModel");

exports.getAllChat = async (req, res) => {
  try {
    const chat = await Chat.find();
    res.status(200).json({
      status: "success",
      results: chat.length,
      data: {
        chat,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createChat = async (req, res) => {
  try {
    const newChat = await Chat.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        chat: newChat,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err,
    });
  }
};
