const Sequelize = require("sequelize");

const connection = new Sequelize("guiapress2", "root", "dataatecnologia", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
  timezone: "-03:00",
});

module.exports = connection;
