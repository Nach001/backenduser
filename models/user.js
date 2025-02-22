// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     nombre: DataTypes.STRING,
//     correo: DataTypes.STRING,
//     contrasena: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'User',
//   });
//   return User;
// };

'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }

    // Method to check password during login
    validPassword(password) {
      return bcrypt.compareSync(password, this.contraseña);
    }
  }

  User.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false // Ensure nombre is not null
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false, // Ensure correo is not null
      unique: true // Ensure correo is unique
    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false // Ensure contraseña is not null
    }
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      // Hook to hash password before saving
      beforeCreate: async (user) => {
        if (user.contraseña) {
          const salt = await bcrypt.genSalt(10);
          user.contraseña = await bcrypt.hash(user.contraseña, salt);
        }
      },
      // Hash password before updating if it's changed
      beforeUpdate: async (user) => {
        if (user.contraseña) {
          const salt = await bcrypt.genSalt(10);
          user.contraseña = await bcrypt.hash(user.contraseña, salt);
        }
      }
    }
  });

  return User;
};