"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasOne(models.UserBook, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Email already exists",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Invalid email format",
          },
          customValidation(value) {
            const allowedDomains = ["gmail.com", "hotmail.com", "yahoo.com"];
            const domain = value.split("@")[1];
            if (!allowedDomains.includes(domain)) {
              throw new Error("Invalid email domain");
            }
          },
          notEmpty: {
            args: true,
            msg: "Email is required",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          isAlphanumeric: {
            args: true,
            msg: "Password must be alphanumeric",
          },
          is: {
            args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g,
            msg:
              "Password must contain at least one uppercase letter, one lowercase letter, and one number",
          },
          isLength: {
            args: [8, undefined],
            msg: "Password must be at least 8 characters",
          },
          containsUppercase: (value) => {
            if (!/[A-Z]/.test(value)) {
              throw new Error(
                "Password must contain at least one uppercase letter"
              );
            }
          },
          doesNotContainSpecialChar: (value) => {
            if (/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
              throw new Error("Password cannot contain special characters");
            }
          },
        },
      },
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.beforeCreate(user => {
    user.password = hashPassword(user.password);
    user.role = "customer";
  });
  return User;
};
