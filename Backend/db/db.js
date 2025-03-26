import mongoose from 'mongoose'
import { DB_NAME } from '../Dbname.js';

const connectToDb = async() => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongo connected !! DB Host: ${connection.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1);
    }
}
export default connectToDb