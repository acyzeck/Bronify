import Song from '../models/song.model.js';

export const createSong = async (req, res, next) => {
	try {

		const { title, artist, albumId, duration, audioUrl, imageUrl } = req.body;

		const song = new Song({
			title,
			artist,
			audioUrl,
			imageUrl,
			duration,
			albumId: albumId || null,
		});

		await song.save();

		// if song belongs to an album, update the album's songs array
		if (albumId) {
			await Album.findByIdAndUpdate(albumId, {
				$push: { songs: song._id },
			});
		}
		res.status(201).json(song);
	} catch (error) {
		console.log("Error in createSong", error);
		next(error);
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
