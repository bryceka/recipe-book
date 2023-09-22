const { Model, DataTypes } = require("sequelize");

class Rating extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        recipe_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        rating: {
          type: DataTypes.DECIMAL(2, 1),
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "Rating",
        tableName: "ratings",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // A rating belongs to a user.
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    // A rating belongs to a recipe.
    this.belongsTo(models.Recipe, {
      foreignKey: "recipe_id",
      as: "recipe",
    });
  }
}

module.exports = Rating;
