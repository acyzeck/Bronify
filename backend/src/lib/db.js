import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    const db = process.env.MONGODB_URI;
    try {
        await mongoose.connect(db);
        console.log('MongoDB connected', db);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

export default connectDB;
