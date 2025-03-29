const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/fitsphereDb");
// mongodb + srv://admin:admin@cluster0.qs1hl6j.mongodb.net/

//mongoose.connect(process.env['mongo_url');

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDb connected successfully");
});

db.on("error", () => {
    console.log("MongoDb Connection Failed");
});
