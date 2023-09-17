require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// process.env.ATLAS_URI;||
const Uri = process.env.ATLAS_URI;
mongoose.connect(Uri, { useNewUrlParser: true });

//for the routes notes
const notesRouter = require('./src/routes/notes.routes');
const usersRouter = require('./src/routes/users.routes');

app.use('/notes', notesRouter); //if anyone go to route '/' it will redirect to /notes
app.use('/users', usersRouter); //if anyone go to route '/' it will redirect to /users

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Express server listening on port " + port);
});