var DataTypes = require("sequelize").DataTypes;
var _product = require("./product");
var _supplier = require("./supplier");

function initModels(sequelize) {
  var product = _product(sequelize, DataTypes);
  var supplier = _supplier(sequelize, DataTypes);

  product.belongsTo(supplier, { as: "supplier", foreignKey: "supplier_id"});
  supplier.hasMany(product, { as: "products", foreignKey: "supplier_id"});

  return {
    product,
    supplier,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
