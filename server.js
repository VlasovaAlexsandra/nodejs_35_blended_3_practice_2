const express = require('express')
const dotenv = require('dotenv')

// load variebles
dotenv.config({ path: './config/.env' })

const app = express()

// body parser
app.use(express.json())

const { PORT } = process.env

app.listen(PORT, () => { console.log(`Server running on port ${PORT}`) })
