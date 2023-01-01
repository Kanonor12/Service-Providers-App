import express, { json } from 'express';
import dotenv from 'dotenv';
// Intenal imports
import authRoutes from './routes/authRoutes.js'
dotenv.config()

const app = express();
const port = process.env.PORT || 5000;

app.use(json())

app.use("/auth", authRoutes)


app.listen(port, () => {
    console.log(`Listening on ${port}`);
})