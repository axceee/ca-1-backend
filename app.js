import dotenv from 'dotenv'
dotenv.config()

const port = process.env.PORT

import express from 'express'

const app = express()
app.use(express.json())

import router from './routes/user.routes'

app.use('/user',router)

export default app