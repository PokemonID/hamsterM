module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'active',
    },
    balance: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
    },
  }, {
    timestamps: true,
    tableName: 'users',
  });

  User.associate = (models) => {
    User.hasMany(models.GameSession);
    User.hasMany(models.Transaction);
  };

  return User;
};
