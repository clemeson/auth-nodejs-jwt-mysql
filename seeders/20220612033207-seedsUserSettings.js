const bcrypt = require('bcryptjs');

module.exports = {
    async up(queryInterface, Sequelize) {
        const fields = [
            {
                name: 'clemeson alves',
                email: 'clemeson@clemeson.com',
                password: bcrypt.hashSync('123456'),
            },
        ];

        return queryInterface.bulkInsert('userSettings', fields, {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
