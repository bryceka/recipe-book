const { Model, DataTypes } = require("sequelize");

class Allergen extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: "Allergen",
        tableName: "allergens",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // An allergen can be associated with many recipes through a join table 'recipe_allergens'.
    this.belongsToMany(models.Recipe, {
      through: "recipe_allergens",
      foreignKey: "allergen_id",
      as: "recipes",
    });

    // An allergen can be associated with many users through a join table 'user_allergens'.
    this.belongsToMany(models.User, {
      through: "user_allergen",
      foreignKey: "allergen_id",
      as: "users",
    });
  }
}

module.exports = Allergen;
