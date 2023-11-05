const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Mongoose Connected succesfully");
        });
}

module.exports = connectDatabase;