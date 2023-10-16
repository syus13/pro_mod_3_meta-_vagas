import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
dotenv.config()


import { Database } from "./database/configDatabase.js"


Database.initialize()

const app = express()
const port = 3333

app.use(cors({origin: '*'}))
app.use(express.json())


app.listen(port, () => console.log(`Server on, port ${port}`))