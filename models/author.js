'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author.hasMany(models.Book, {
        foreignKey: 'author_id',
        as: 'books'
      });
    }
  }
  Author.init({
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    birth_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Author',
  });
  return Author;
};