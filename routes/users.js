const express = require('express')
const userRouter = express.Router()

const usersController = require('../controllers/usersController')

userRouter.get('/', usersController.getAllUsers)

module.exports = userRouter
