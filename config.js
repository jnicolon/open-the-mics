require("dotenv").config();

const password = process.env.MONGO_DB_PASSWORD;

module.exports = {
  MONGODB: `mongodb+srv://open-the-mics:${password}@cluster0.orykh.mongodb.net/open-the-mics?retryWrites=true&w=majority`,
};
