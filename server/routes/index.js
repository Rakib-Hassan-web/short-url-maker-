const express = require('express');
const routee =express.Router()
const auth_route = require("./authRoutes")
const shortner_route = require("./shortner")


routee.use("/auth" ,auth_route)
routee.use("/url" ,shortner_route)

routee.get("/:id" ,)


module.exports=routee
