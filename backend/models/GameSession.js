module.exports = (sequelize, DataTypes) => {
  const GameSession = sequelize.define('GameSession', {
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,  // Продолжительность в секундах
    },
  }, {
    timestamps: true,
    tableName: 'game_sessions',
  });

  GameSession.associate = (models) => {
    GameSession.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return GameSession;
};
