import { Router } from "express";
import { getAllAlbums, getAlbumById, createAlbum } from "../controllers/album.controller.js";

const router = Router();

router.get("/", getAllAlbums);
router.get("/:id", getAlbumById);
router.post("/create", createAlbum);

export default router;