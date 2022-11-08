const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('getAllUsers')
})

module.exports = router
