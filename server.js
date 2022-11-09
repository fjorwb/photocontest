const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const { sequelize } = require('./models/index')

const userRouter = require('./routes/users')

// Middleware

// Routes
app.use('/users', userRouter)

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
// app.use(morgan('combined'))

app.get('/', (req, res) => {
	res.send('Hello Fernando!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
	console.log(`Server running on port http://localhost:${PORT}`)

	sequelize
		.authenticate()
		.then(() => {
			console.log('Connection has been established successfully.')
		})
		.catch(err => {
			console.error('Unable to connect to the database:', err)
		})
})
