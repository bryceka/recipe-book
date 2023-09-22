const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        // Fields based on your schema
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        username: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        full_name: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        bio: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        profile_pic: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: true,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "users",
        timestamps: false,
      }
    );
  }

  static associate(models) {
    // A user has many recipes.
    this.hasMany(models.Recipe, {
      foreignKey: "user_id",
      as: "recipes",
    });

    // A user has many comments.
    this.hasMany(models.Comment, {
      foreignKey: "user_id",
      as: "comments",
    });

    // A user has many ratings.
    this.hasMany(models.Rating, {
      foreignKey: "user_id",
      as: "ratings",
    });

    // A user has many allergens through a join table 'user_allergens'.
    this.belongsToMany(models.Allergen, {
      through: "user_allergen",
      foreignKey: "user_id",
      as: "allergens",
    });
  }
}

module.exports = User;
