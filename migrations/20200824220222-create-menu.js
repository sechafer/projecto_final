'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('MENU', {
      ID_ITEM: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ITEM_NAME: {
        type: Sequelize.STRING
      },
      DESCRIPCION: {
        type: Sequelize.STRING
      },
      TIPO_COMIDA: {
        type: Sequelize.BOOLEAN
      },
      PRECIO: {
        type: Sequelize.REAL
      },
      FOTO_URL: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('MENU');
  }
};