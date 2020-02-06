'use strict'

const Sequelize = require('sequelize')
const db = require('./database')

const Dog = db.define('dogs', {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			notEmpty: true
		}
	},
	age: {
		type: Sequelize.INTEGER,
		validate: {
			min: 0,
			max: 100
		}
	},
	location: {
		type: Sequelize.ENUM('Chicago', 'New York')
	}

})

module.exports = Dog
