const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

main().then(() => {
  console.log("Connected to MongoDB");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}    


//Index Route

// Route to display all chats
app.get("/chats", async (req, res) => {
    const chats = await Chat.find({});
    res.render("index.ejs", { chats });
});

//New Route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

// Create Route


app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date(),
    });
    newChat
        .save()
        .then((res) => {
            console.log("chat was saved");
        })
        .catch((err) => {
            console.log(err);
        });
    res.redirect("/chats");
});


//Edit Route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});

app.post("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let { from, to, msg } = req.body;
    await Chat.findByIdAndUpdate(id, {
        from: from,
        to: to,
        msg: msg,
        updated_at: new Date(),
    });
    res.redirect("/chats");
});

// Delete Route
app.post("/chats/:id/delete", async (req, res) => {
    let { id } = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

// Update Route
app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        { msg: newMsg },
        { runValidators: true, new: true }
    );
    res.redirect("/chats");
});

//Destroy Route
app.delete("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

// let chat1 = new Chat({
//   from: "User1",
//   to: "User2",
//   msg: "Hello!",
//   created_at: new Date(),
// });

// chat1.save().then(() => {
//   console.log("Chat1 saved");
// }).catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("root is working");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});