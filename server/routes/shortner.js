const express = require('express');
const { shortUrlcreate } = require('../controllers/shortnerController');
const routee =express.Router()


routee.post("/create" ,shortUrlcreate)


module.exports=routee
