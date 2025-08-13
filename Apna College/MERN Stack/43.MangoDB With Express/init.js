require('dotenv').config();
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

let allChats = [
  {
    from: "alice",
    to: "bob",
    msg: "Hey Bob, how are you?",
  },
  {
    from: "charlie",
    to: "david",
    msg: "Let's meet for coffee tomorrow.",
  },
  {
    from: "emma",
    to: "frank",
    msg: "Happy Birthday, Frank!",
  },
  {
    from: "grace",
    to: "hannah",
    msg: "Can you send me the notes?",
  },
  {
    from: "ivan",
    to: "julia",
    msg: "Good luck for your exams!",
  },
];

const chatSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    msg: { type: String, required: true }
}, { timestamps: true });

main()
  .then(() => {
    console.log("Connected to MongoDB");
    return Chat.deleteMany({});
  })
  .then(() => {
    return Chat.insertMany(allChats);
  })
  .then(() => {
    console.log("5 new chats added!");
    mongoose.connection.close();
  })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}