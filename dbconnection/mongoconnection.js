const mongoose = require("mongoose");

async function createConnection() {
    try{
        mongoose.connect(process.env.DB_URL);
        console.log("Connected");
    } catch(err) {
        console.log("Not Connected",err);
    }
}

module.exports = createConnection;