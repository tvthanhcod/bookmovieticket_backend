const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')


const app = express()
const morgan = require('morgan')
const router = require('./routers')
require('dotenv').config()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(morgan('combined'))
app.use('/api/v1/', router)



app.listen(process.env.PORT)