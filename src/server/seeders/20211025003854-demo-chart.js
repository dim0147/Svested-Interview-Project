'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('charts', [
            {
                id: 1,
                name: 'Rubi',
                age: 31,
                gender: 'F',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: 'Randy',
                age: 32,
                gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: 'Apple',
                age: 18,
                gender: 'F',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                name: 'Mango',
                age: 14,
                gender: 'F',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: 'Ferry',
                age: 37,
                gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                name: 'Johnson',
                age: 55,
                gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                name: 'Larry',
                age: 45,
                gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                name: 'Ryne',
                age: 12,
                gender: 'F',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                name: 'Christopher',
                age: 24,
                gender: 'M',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('charts', null, {});
    },
};
