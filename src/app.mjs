import { createRequire } from 'module';
const require = createRequire(import.meta.url);


//express server
const express = require('express');

//cors
var cors = require('cors');

//json body parser
const bodyParser = require('body-parser')


//import main Api Route
import {restRouter} from './api/index.mjs';


//import main Web Route
import {webRouter} from './web/index.mjs';

//initalize the cache
import { cacheStart } from './config/cache.mjs';



const app = express();
const PORT = 9200;

//use cors
app.use(cors());

//basic configs
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'));
app.set('view engine', 'ejs');


//set up in memory cache
cacheStart();


//main web route
app.use('/', webRouter);


//main api route
app.use('/api', restRouter)


//start server
app.listen(process.env.PORT || PORT, () => {
     console.log('listening..... 9200')
})