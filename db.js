const { Sequelize } = require('sequelize')
module.exports =new Sequelize(process.env.DB_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    logging: false,
})