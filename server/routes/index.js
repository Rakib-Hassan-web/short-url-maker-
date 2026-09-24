const express = require('express');
const routee =express.Router()
const auth_route = require("./authRoutes")
const shortner_route = require("./shortner");
const { redirectToUrl } = require('../controllers/shortnerController');


routee.use("/auth" ,auth_route)
routee.use("/url" ,shortner_route)

routee.get("/:id" ,redirectToUrl)


module.exports=routee
