import Album from "../models/album.model.js";
import mongoose from "mongoose";

export const getAllAlbums = async (req, res) => {
    try {
        const albums = await Album.find().populate("songs"); // Populate songs
        res.json(albums);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAlbumById = async (req, res) => {
    const { id } = req.params;
    
    // Check if ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid album ID format" });
    }

    try {
        const album = await Album.findById(id).populate("songs"); // Populate songs
        if (!album) {
            return res.status(404).json({ message: "No album found with this ID" });
        }
        res.json(album);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createAlbum = async (req, res, next) => {
	try {
		const { title, artist, releaseYear, imageUrl } = req.body;

		const album = new Album({
			title,
			artist,
			imageUrl,
			releaseYear,
		});

		await album.save();

		res.status(201).json(album);
	} catch (error) {
		console.log("Error in createAlbum", error);
		next(error);
	}
};
