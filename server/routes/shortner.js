const express = require('express');
const { shortUrlcreate } = require('../controllers/shortnerController');
const { authMiddleware } = require('../middleware/authmiddleware');
const routee =express.Router()


routee.post("/create",authMiddleware  ,shortUrlcreate)


module.exports=routee
