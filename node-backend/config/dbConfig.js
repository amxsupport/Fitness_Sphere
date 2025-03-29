const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        const mongoUrl = process.env.NODE_ENV === 'production'
            ? process.env.MONGO_URL
            : 'mongodb://localhost:27017/fitsphereDb';

        await mongoose.connect(mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1);
    }
};

connectDB();

module.exports = mongoose.connection;
