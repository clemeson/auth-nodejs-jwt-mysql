module.exports = {
    async up(queryInterface, Sequelize) {
        // migrations é analogo ao git, pois entre outros papeis, faz o de versionamento do estado do seu banco.
        return queryInterface.createTable(
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
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.dropTable('userSettings');
    },
};
