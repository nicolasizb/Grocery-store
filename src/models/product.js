const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    product_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price_kg: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price_purchase: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity_kg: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    arrival_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    vegetables_or_fruit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'supplier',
        key: 'supplier_id'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_pkey",
        unique: true,
        fields: [
          { name: "product_id" },
        ]
      },
    ]
  });
};
