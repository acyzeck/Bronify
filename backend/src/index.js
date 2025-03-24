import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './lib/db.js';

import songRoutes from './routes/song.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use('/api/songs', songRoutes);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDB();
});
