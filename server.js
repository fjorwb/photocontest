const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const usersRouter = require('./routes/users')

// Middleware

// Routes
app.use('/users', usersRouter)

app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get('/', (req, res) => {
	res.send('Hello Fernando!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)
})
