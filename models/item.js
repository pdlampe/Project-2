/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
module.exports = function (sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    plu: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_desc: DataTypes.STRING,
    category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    subcat: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_img: DataTypes.STRING,
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    case_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    case_dimensions: {
      type: DataTypes.STRING,
      allowNull: false
    }, case_weight: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    on_hand: {
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
