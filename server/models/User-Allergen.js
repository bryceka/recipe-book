const { Model, DataTypes } = require("sequelize");

class UserAllergen extends Model {
  static init(sequelize) {
    return super.init(
      {
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
          primaryKey: true,
        },
        allergen_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "allergens",
            key: "id",
          },
          primaryKey: true,
        },
      },
      {
        sequelize,
        modelName: "UserAllergen",
        tableName: "user_allergen",
        timestamps: false,
        underscored: true,
      }
    );
  }
  // No associate methods are needed in this model,
  // as the associations for this join table are defined within the main models.
}

module.exports = UserAllergen;
