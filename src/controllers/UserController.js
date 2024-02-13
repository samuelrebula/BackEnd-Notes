const UserModel = require("../models/UserModel");

const vetor = [
    {
        id: 0,
        name: "Albert", 
    },
    {
        id: 1,
        name: "Klaus", 
    },
    {
        id: 2,
        name: "Leon", 
    },
    {
        id: 3,
        name: "Arthur Leon", 
    },
    {
        id: 4,
        name: "Otto", 
    },
    {
        id: 5,
        name: "Hans", 
    },
    {
        id: 6,
        name: "Baldur", 
    },
];

module.exports = {
    async create(request, response) {
      try {
        const user = request.body;
  
        const result = await UserModel.create(user);
        return response.status(200).json({ user_id: result });
      } catch (err) {
        console.log("User creation failed: " + err);
        return response.status(500).json({
          notification: "Internal server error while trying to create User",
        });
      }
    },
  
    async getById(request, response) {
      try {
        const { user_id } = request.params;
        const result = await User.getById(user_id);
  
        return response.status(200).json(result);
      } catch (err) {
        console.log("User getById failed: " + err);
        return response.status(500).json({
          notification: "Internal server error while trying to get User",
        });
      }
    },
  
    async update(request, response) {
      try {
        const { user_id } = request.params;
        const user = request.body;
        const result = await UserModel.updateById(user_id, user);
  
        return response.status(200).json(result);
      } catch (err) {
        console.log("User update failed: " + err);
        return response.status(500).json({
          notification: "Internal server error while trying to update User",
        });
      }
    },
  
    async delete(request, response) {
      try {
        const { user_id } = request.params;
  
        const result = await UserModel.deleteById(user_id);
        return response.status(200).json(result);
      } catch (err) {
        console.log("User delete failed: " + err);
        return response.status(500).json({
          notification: "Internal server error while trying to delete User",
        });
      }
    },
};