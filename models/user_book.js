"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserBook extends Model {
    static associate(models) {
      // define association here
    }
  }
  UserBook.init(
    {
      borrowed_at: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Borrowed_at cannot be empty",
          },
          isDate: {
            msg: "Borrowed_at must be a date",
          },
        },
      },
      borrowed_exp: {
        type: DataTypes.DATE,
        validate: {
          notEmpty: {
            msg: "Borrowed_exp cannot be empty",
          },
          isDate: {
            msg: "Borrowed_exp must be a date",
          },
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: {
          args: true,
          msg: "You already borrowed a book",
        },
        validate: {
          notNull: {
            msg: "User_id cannot be null",
          },
          notEmpty: {
            msg: "User_id cannot be empty",
          },
          isInt: {
            msg: "User_id must be an integer",
          },
        },
      },
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Book_id cannot be null",
          },
          notEmpty: {
            msg: "Book_id cannot be empty",
          },
          isInt: {
            msg: "Book_id must be an integer",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "UserBook",
    }
  );
  UserBook.beforeCreate((instance) => {
    instance.borrowed_at = instance.borrowed_at ?? new Date();
    let exp_date = new Date(instance.borrowed_at);
    if (instance.borrowed_at) {
      exp_date = exp_date.setDate(exp_date.getDate() + 7);
    } else {
      exp_date = new Date(new Date().setDate(new Date().getDate() + 7));
    }

    instance.borrowed_exp = exp_date;
  });
  return UserBook;
};
