const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life: {
      type: DataTypes.STRING,
      allowNull:false
    },
    force: {
      type: DataTypes.STRING,
      allowNull:false
    },
    defense: {
      type: DataTypes.STRING,
      allowNull:false
    },
    speed: {
      type: DataTypes.STRING,
      allowNull:false
    },
    height: {
      type: DataTypes.STRING,
      allowNull:false
    },
    weight:{
      type: DataTypes.STRING,
      allowNull:false
    }
  },
  { timestamps: false }
  );
};
