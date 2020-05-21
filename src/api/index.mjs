import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const express = require('express');


import {sigfoxRouter} from './moduleSigfox/index.mjs';



export const restRouter = express.Router();



restRouter.use('/messageSigfox', sigfoxRouter);
