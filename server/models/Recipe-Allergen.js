const { Model, DataTypes } = require("sequelize");

class RecipeAllergen extends Model {
  static init(sequelize) {
    return super.init(
      {
        recipe_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "recipes",
            key: "id",
          },
        },
        allergen_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
            model: "allergens",
            key: "id",
          },
        },
      },
      {
        sequelize,
        modelName: "RecipeAllergen",
        tableName: "recipe_allergen",
        timestamps: false,
      }
    );
  }
  // No associate methods are needed in this model,
  // as the associations for this join table are defined within the main models.
}

module.exports = RecipeAllergen;
