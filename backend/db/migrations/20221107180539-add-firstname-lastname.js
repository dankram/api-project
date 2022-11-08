'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'firstName', { type: Sequelize.DataTypes.STRING })
    await queryInterface.addColumn('Users', 'lastName', { type: Sequelize.DataTypes.STRING })
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.removeColumn('Users', 'firstName')
    await queryInterface.removeColumn('Users', 'lastName')
  }
};
