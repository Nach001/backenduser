// class UsersService{
//     static async getUser() {
//         try {
//             let users = await User.findAll();
//             return users;
//          }
//           catch(e){
              
//           }
//       }
//   }

// module.exports = UsersService;

console.log(__dirname); // Añade esto para verificar la ruta absoluta
const { User } = require('../../models'); // Ajusta la ruta si es necesario


class UsersServices {

  // Get all users from the database
  static async getUsers() {
    return await User.findAll();
  }

  // Create a new user (login method is misleading; it should handle authentication)
  static async login(correo, password) {
    // Assuming a method User.authenticate exists for verifying credentials
    return await User.authenticate(correo, password);
  }

  // Create a new user
  static async crearUsuarios(userData) {
    return await User.create(userData);
  }

  // Delete a user by ID
  static async deleteUser(id) {
    return await User.destroy({ where: { id } });
  }

  // Update a user's information by ID
  static async updateUser(id, updatedData) {
    return await User.update(updatedData, { where: { id } });
  }
}

module.exports = UsersServices;