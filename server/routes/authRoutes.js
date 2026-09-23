const express = require('express');
const { registration } = require('../controllers/authController');
const routee =express.Router()


routee.post("/registration" , registration)
routee.post("/login" , registration)


module.exports=routee
