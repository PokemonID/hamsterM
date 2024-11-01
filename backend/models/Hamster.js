module.exports = (sequelize, DataTypes) => {
  const Hamster = sequelize.define('Hamster', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    power: {
      type: DataTypes.INTEGER,
      defaultValue: 10,
    },
  }, {
    timestamps: true,
    tableName: 'hamsters',
  });

  Hamster.associate = (models) => {
    Hamster.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return Hamster;
};
