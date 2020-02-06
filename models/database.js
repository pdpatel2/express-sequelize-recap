const Sequelize = require("sequelize");

module.exports = new Sequelize("postgres://localhost:5432/express-sequelize-review", {
  logging: false
});
