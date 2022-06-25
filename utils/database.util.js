const { Sequelize, DataTypes } = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost', // el host donde esta la base de datos
    username: 'postgres', // el usuario de la base de datos
    password: 'eq4589ze', // la contraseña de la base de datos
    database: 'checkin',
    port: 5432
}
)

//Exportamos mi coneccion a la base de datos

module.exports = { db, DataTypes };