module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    type: {
      type: DataTypes.ENUM('purchase', 'reward', 'exchange'),
      allowNull: false,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  }, {
    timestamps: true,
    tableName: 'transactions',
  });

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Transaction;
};
