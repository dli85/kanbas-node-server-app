import model from "./model.js";
export const createUser = (user) => {
  delete user._id;
  return model.create(user);
};
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUserByUsername = (username) =>
  model.findOne({ username: username });

// const findDocuments = async () => {
//   try {
//     const documents = await model.find(); // Find all documents
//     console.log("Found documents:", documents);
//   } catch (error) {
//     console.error("Error finding documents:", error);
//   }
// };

export const findUserByCredentials = (username, password) => {
  // findDocuments();
  return model.findOne({ username, password });
};
export const updateUser = (userId, user) =>
  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });
