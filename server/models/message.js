const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    messages: [{ type: String }],
  },
  {
    timestamps: true, // adds createdAt and updatedAt
  }
);

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;
