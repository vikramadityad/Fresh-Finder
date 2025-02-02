module.exports = (sequelize, DataTypes) => {
  const OrderItem = sequelize.define(
    'order_items',
    {
      num: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      each_price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  )

  OrderItem.associate = (orders, products)  => {
    OrderItem.belongsTo(orders, {
      foreignKey: { name: 'orderId', allowNull: false },
      onDelete: 'cascade'
    })
    OrderItem.belongsTo(products, {
      foreignKey: { name: 'productId', allowNull: false },
      onDelete: 'cascade'
    })
  }

  return OrderItem
}
