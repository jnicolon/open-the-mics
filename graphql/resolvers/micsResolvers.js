const Mics = require("../../models/micsModels");

module.exports = {
  Query: {
    async getMics() {
      try {
        const mics = await Mics.find();
        return mics;
      } catch (err) {
        throw new Error(err);
      }
    },
  },
};
