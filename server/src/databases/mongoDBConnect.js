import mongoose from 'mongoose';
import pkg from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config()

const port = process.env.PORT

const {connect, connection} = pkg;
const connectUrl = process.env.MONGO_URL;

const app = express();

mongoose.set('strictQuery', true);
const mongoDBConnect = () => {
    mongoose.connect(connectUrl)
.then(() => app.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(`Database connected at ${connection.host}:${connection.port}`)
}))
.catch((err) =>{ console.log(err.message)})
}

export default mongoDBConnect;