
import mongoose from 'mongoose';
import pkg from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
// Internal imports



dotenv.config();
const port = process.env.PORT || 5000;
const connectUrl = process.env.MONGO_URL;
const {connect, connection} = pkg;
const app = express();

mongoose.set('strictQuery', true);


const mongoDBConnect = () => {

    try {
        mongoose.connect(connectUrl)
    } catch (error) {
        console.log(error);
    }
}
export default mongoDBConnect;

/*
.then(() => app.listen(port, () => {
    console.log(`listening on port ${port}`)
    console.log(`Database connected at ${connection.host}:${connection.port}`)
}))
.catch((err) =>{ console.log(err.message)})
*/