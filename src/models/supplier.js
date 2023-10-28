const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supplier', {
    supplier_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nit: {
      type: DataTypes.STRING(12),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'supplier',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "supplier_pkey",
        unique: true,
        fields: [
          { name: "supplier_id" },
        ]
      },
    ]
  });
};
