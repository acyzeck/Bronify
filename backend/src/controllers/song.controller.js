import Song from '../models/song.model.js';

export const createSong = async (req, res) => {
    const {
        title,
        artist,
        duration,
        audioUrl,
        cover,
        album,
        lyrics,
        description,
    } = req.body;
    try {
        const song = new Song({
            title,
            artist,
            duration,
            audioUrl,
            cover,
            album,
            lyrics,
            description,
        });
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find();
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getSongById = async (req, res) => {
    const { id } = req.params;
    try {
        const song = await Song.findById(id);
        if (song === null) {
            return res
                .status(404)
                .json({ message: 'No song found with this id' });
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
