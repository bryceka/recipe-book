const { Model, DataTypes } = require("sequelize");

class Comment extends Model {
  static init(sequelize) {
    return super.init(
      {
        // Fields based on your schema
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
        comment: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "Comment",
        tableName: "comments",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // A comment belongs to a user.
    this.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    // A comment belongs to a recipe.
    this.belongsTo(models.Recipe, {
      foreignKey: "recipe_id",
      as: "recipe",
    });
  }
}

module.exports = Comment;
