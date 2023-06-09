const db = require('./database')
const {DataTypes} = require('sequelize')

module.exports = {
  Character: db.define('character', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    attack: DataTypes.INTEGER,
    defense: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phrase: DataTypes.STRING,
    weapon: DataTypes.STRING

  })
}