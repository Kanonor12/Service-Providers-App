import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import pkg from 'mongoose';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
// Intenal imports
// import { brotliCompress } from 'zlib';
import authRoutes from './routes/authRoutes.js';
import usersRoutes from './routes/usersRoutes.js';
import serviceProvidersRoutes from './routes/serviceProvidersRoutes.js';
import mongoDBConnect from './databases/mongoDBConnect.js';
import { logger } from './middlewares/logger.js';

// Configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const port = process.env.PORT || 5000;
const { mongoose } = pkg;
const app = express();
app.use(logger);
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use('/assets', express.static(path.join(__dirname, '../public/assets')));

// File Storage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../public/assets');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// Routes
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);
app.use('/service-providers', serviceProvidersRoutes);

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!');
});

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!');
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
  mongoDBConnect();
});
