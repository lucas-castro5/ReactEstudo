const mongoose = require("mongoose")
require("dotenv").config()

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    console.log(dbUser)
    console.log(dbPassword)
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@cluster0.umneycm.mongodb.net/?appName=Cluster0`
        );
        console.log("conectou ao banco!")
        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn