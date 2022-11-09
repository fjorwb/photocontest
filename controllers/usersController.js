const { User } = require('../models/index')

module.exports = {
	async getAllUsers(req, res) {
		const users = await User.findAll({
			attributes: [
				'id',
				'first_name',
				'last_name',
				'address',
				'address2',
				'city',
				'state',
				'zip_code',
				'country',
				'phone',
				'email',
				'role'
			]
		})
		res.send(users)
	}
}
