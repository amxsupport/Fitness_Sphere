const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const dbConfig = require('./config/dbConfig');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");
const getInfo = require("./routes/infoRoute");
const meals = require("./routes/mealsRoute");
const chat = require("./routes/chatRoute");
const friends = require("./routes/friendRoute");
const notify = require("./routes/notifyRoute");
// const openai = require("./routes/openaiRoute");


app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);
app.use("/api/info/", getInfo);
app.use("/api/meals/", meals);
app.use("/api/chat/", chat);
app.use("/api/friend/", friends);
app.use("/api/notify/", notify);
// app.use("/api/openai", openai)

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Something went wrong!',
        error: process.env.NODE_ENV === 'development' ? err.message : {}
    });
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
}

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
    console.error('Unhandled Promise Rejection:', err);
    // Close server & exit process
    process.exit(1);
});

app.listen(port, () => console.log(`Node server listening on port ${port}`));
