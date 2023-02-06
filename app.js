import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

//CORS Policy
app.use(cors())



app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))

//Load Routes
app.use("/api/user",userRoutes)


// Database Connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

app.listen(port, () => {
    console.log(`Server Listening at http://localhost:${port}`)
})