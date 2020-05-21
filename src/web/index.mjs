import { createRequire } from 'module';
const require = createRequire(import.meta.url);


const express = require('express');


export const webRouter = express.Router();


//atach post and get to methods
webRouter
    .get('/', home);



function home (req, res) {

    res.render('index');
}