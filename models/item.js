/* eslint-disable prettier/prettier */
module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    plu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prodDesc: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,subcat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prodImg: DataTypes.STRING,
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    caseCount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    caseDimensions: {
      type: DataTypes.STRING,
      allowNull: false
    }, caseWeight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    onHand: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    certs: DataTypes.STRING,
    ndbno: DataTypes.STRING,
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("NOW")
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.fn("NOW")
    }
  });
  return Item;
};
