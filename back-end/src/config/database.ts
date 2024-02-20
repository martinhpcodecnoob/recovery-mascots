import { config } from 'dotenv'
import { connect, ConnectOptions } from 'mongoose'

config()

const MONGO_DB_URI = process.env.MONGO_DB_URI
const MONGO_DB_NAME = process.env.MONGO_DB_NAME

const connectDB = async() => {
    try {
        await connect(`${MONGO_DB_URI}/${MONGO_DB_NAME}`, {} as ConnectOptions)
        console.log("MoongoDB connected")
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

export default connectDB;