const express = require('express');
const routee =express.Router()
const auth_route = require("./authRoutes")
const shortner_route = require("./shortner")


routee.use("/auth" ,auth_route)
routee.use("/shortner" ,shortner_route)


module.exports=routee
