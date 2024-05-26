import express from 'express';
import controllers from '../controller/index.js';
import config from '../../config.js';
import cacheData from '../middleware/index.js';

const router = express.Router();

router.get(`${config.rootPath}movieData/:searchText`, cacheData, controllers.getMovieData);

export default router;