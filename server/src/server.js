import express, { json } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath} from 'url';
// Intenal imports
import authRoutes from './routes/authRoutes.js'
import usersRoutes from './routes/usersRoutes.js';
import serviceProvidersRoutes from './routes/serviceProvidersRoutes.js'
import mongoDBConnect from './databases/mongoDBConnect.js';
import { brotliCompress } from 'zlib';

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use("/assets", express.static(path.join(__dirname, "../public/assets")))

// File Storage

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})
const upload = multer({storage});


app.use("/auth", authRoutes)
app.use("/users", usersRoutes)
app.use("/service-providers", serviceProvidersRoutes)


mongoDBConnect()