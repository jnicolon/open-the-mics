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
    async createMic(parent, args) {
      const { name, host, description, date, totalComedians, comedians } = args;
      const newMic = new Mic({
        name,
        host,
        description,
        date,
        totalComedians,
        comedians,
      });
      const res = await newMic.save();

      return res;
    },

    async deleteComedian(parent, args) {
      const { micId, comedian } = args;

      const mic = await Mic.findById(micId);
      const { comedians } = mic;

      comedians.forEach((com, index) => {
        if (com === comedian) {
          comedians.splice(index, 1);
        }
      });
      const deleted = await Mic.findByIdAndUpdate(micId, { comedians });

      return deleted;
    },
  },
};
