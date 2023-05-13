require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// process.env.ATLAS_URI;||
const Uri = "mongodb://localhost:27017/exercise-tracker";
mongoose.connect(Uri, { useNewUrlParser: true });

//for the routes notes
const notesRouter = require('./routes/notes.routes');

app.use('/', notesRouter); //if anyone go to route '/' it will redirect to /notes

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Express server listening on port " + port);
});