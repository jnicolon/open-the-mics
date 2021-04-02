const Mic = require("../../models/micsModels");

module.exports = {
  Query: {
    async getMics() {
      try {
        const mics = await Mic.find();
        return mics;
      } catch (err) {
        throw new Error(err);
      }
    },
    async getMic(parent, args) {
      try {
        const mic = await Mic.findById(args.id);
        return mic;
      } catch (err) {
        console.log(err);
      }
    },
  },
  Mutation: {
    async createMic(_, args, context, info) {
      const { name, host, description, date, totalComedians } = args;
      const newMic = new Mic({
        name,
        host,
        description,
        date,
        totalComedians,
      });
      const res = await newMic.save();

      return res;
    },
  },
};
