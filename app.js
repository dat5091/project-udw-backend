const express = require("express");
const cors = require("cors");
const contactsRouter = require("./app/routes/qlns.route");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome!!" });
});

app.use("/api/contacts", contactsRouter);

module.exports = app;