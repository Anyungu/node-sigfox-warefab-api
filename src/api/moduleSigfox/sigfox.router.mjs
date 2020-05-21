import { createRequire } from 'module';
const require = createRequire(import.meta.url);

import {postMetric,
    getMetric
} from './sigfox.controller.mjs';

const express = require('express');


export const sigfoxRouter = express.Router();


//atach post and get to methods
sigfoxRouter
    .post('/', postMetric)
    .get('/', getMetric);