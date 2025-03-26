import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import connectDB from './lib/db.js';

import songRoutes from './routes/song.routes.js';
import albumRoutes from './routes/album.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use this before your routes
app.use(cors({
    origin: 'http://localhost:5173', // Frontend origin (adjust if necessary)
    credentials: true, // Allow credentials (cookies) to be sent
}));

app.use(cookieParser());

app.use('/api/songs', songRoutes);
app.use('/api/albums', albumRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
