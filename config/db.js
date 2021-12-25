const { connect } = require('mongoose')

const connectDB = async () => {
    const DB = await connect(process.env.MONGO_DB_URI)
    // console.log(`Mongo DB connected: ${DB}`)
    console.log(`MongoDB are connected on \n PORT: ${DB.connection.port}, \n NAME: ${DB.connection.name}, \n HOST: ${DB.connection.host}`);
    // console.log(DB.connections);
}

module.exports = connectDB

// connect(process.env.MONGO_DB_URI)