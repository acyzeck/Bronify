import { Router } from 'express';
import {
    createSong,
    getAllSongs,
    getSongById,
} from '../controllers/song.controller.js';

const router = Router();

router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.post('/create', createSong);

export default router;