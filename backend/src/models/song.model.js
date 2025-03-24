import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        artist: String,
        cover: String,
        duration: Number,
        audioUrl: String,
        album: String,
        lyrics: String,
        description: String,
    },
    { timestamps: true }
);

const Song = mongoose.model('Song', songSchema);

export default Song;
