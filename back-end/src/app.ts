import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import connectDB from './config/database'
import router from './routes'

const app = express()
connectDB()

app.use(morgan('dev'))
app.use(
    cors({
        origin:['http://localhost:3000','http://localhost:4000'],
        credentials:true,
        methods:["GET", "POST", "PUT", "DELETE", "OPTIONS","PATCH"],
        allowedHeaders:[
            "Content-Type",
            "Authorization",
            "X-User-Id",
            "X-Requested-With",
            "Accept",
            "Origin",
            "Access-Control-Allow-Headers",
            "Access-Control-Request-Headers",
            "Access-Control-Allow-Origin",
        ]
    })
)

app.use(express.json())
app.use('/api/pets', router)

export {app}