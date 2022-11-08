'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('captions', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
				onDelete: 'CASCADE',
				onUpdate: 'CASCADE'
			},
			caption: {
				allowNull: false,
				type: Sequelize.STRING
			},
			photo_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'photos',
					key: 'id'
				}
			},
			user_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('captions')
	}
}
