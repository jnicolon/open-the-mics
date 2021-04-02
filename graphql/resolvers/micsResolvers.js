const Mic = require("../../models/micsModels");
const validateMic = require("../../utils/validateMic");

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
      const { name, host, description, date, totalComedians } = args;

      const { valid, errors } = validateMic({
        name,
        host,
        description,
        date,
        totalComedians,
      });

      if (!valid) {
        throw new Error("Errors", { errors });
      }

      const newMic = new Mic({
        name,
        host,
        description,
        date,
        totalComedians,
        comedians: [],
      });
      const res = await newMic.save();

      return res;
    },

    async deleteComedian(parent, args) {
      const { micId, comedian } = args;

      const { comedians } = await Mic.findById(micId);

      if (comedians.includes(comedian)) {
        comedians.forEach((com, index) => {
          if (com === comedian) {
            comedians.splice(index, 1);
          }
        });
        const res = await Mic.findByIdAndUpdate(micId, { comedians });

        res.comedians = comedians;

        return res;
      } else {
        throw new Error("Comedian not found");
      }
    },

    async addComedian(parent, args) {
      const { micId, comedian } = args;

      if (comedian.trim().length > 0) {
        const { comedians } = await Mic.findById(micId);

        comedians.push(comedian);

        const res = await Mic.findByIdAndUpdate(micId, { comedians });

        res.comedians = comedians;
        return res;
      } else {
        throw new Error("Comedian must have a name");
      }
    },
  },
};
