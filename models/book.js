'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Book.hasOne(models.UserBook, { foreignKey: "book_id" });
    }
  }
  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Title is required"
        },
        notNull: {
          args: true,
          msg: "Title is required"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Description is required"
        },
        notNull: {
          args: true,
          msg: "Description is required"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};