const Sequelize = require('sequelize');

const database = require('../db');

const userSettings = database.define(
    'userSettings',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        createdAt: {
            type: Sequelize.DATE,
        },
        updatedAt: {
            type: Sequelize.DATE,
        },
    },
    {
        indexes: [
            {
                fields: ['email'],
                unique: true,
            },
        ],
    }
);

module.exports = userSettings;
