'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					id: 1,
					email: 'user1@email.com',
					password: '12345',
					first_name: 'user',
					last_name: 'one',
					address: '111 street 1',
					address2: 'some extra address 1',
					city: 'One',
					state: 'One',
					zip_code: '11111',
					country: 'One country',
					phone: '111-111-1111',
					role: 'admin',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 2,
					email: 'user2@email.com',
					password: '12345',
					first_name: 'user',
					last_name: 'two',
					address: '222 street 2',
					address2: 'some extra address 2',
					city: 'Two',
					state: 'Two',
					zip_code: '22222',
					country: 'Two country',
					phone: '222-222-2222',
					role: 'user',
					created_at: new Date(),
					updated_at: new Date()
				},
				{
					id: 3,
					email: 'user3@email.com',
					password: '12345',
					first_name: 'user',
					last_name: 'three',
					address: '333 avenue 3',
					address2: '',
					city: 'Three',
					state: 'Three',
					zip_code: '33333',
					country: 'Three country',
					phone: '333-333-3333',
					role: 'user',
					created_at: new Date(),
					updated_at: new Date()
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {})
	}
}
