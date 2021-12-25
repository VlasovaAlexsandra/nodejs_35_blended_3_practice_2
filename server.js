const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

// load variebles
dotenv.config({ path: './config/.env' })

const app = express()

// body parser
app.use(express.json())

// add routes
const books = require('./routes/booksRoutes')
app.use('/api/v1/books', books)
console.log(books)


const { PORT } = process.env

connectDB()

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

process.on('unhandledRejection', (err, _) => {
    if (err) {
        console.log(`ERROR: ${err.message}`);
        server.close(() => process.exit(1))
    }
})
