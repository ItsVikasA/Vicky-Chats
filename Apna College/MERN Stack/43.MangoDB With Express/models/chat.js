const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    msg: {
        type: String,
        required: true,
    }
}, { timestamps: true }); // createdAt and updatedAt will be handled automatically

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;