const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      user_id: {
        type: Sequelize.STRING(20),
        allowNull: false,
        unique: true,
      },
      user_name: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      user_password: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      user_tel: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      user_nick: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db) {

  }
};
