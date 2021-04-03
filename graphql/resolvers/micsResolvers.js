const Mic = require("../../models/micsModels");
const validateMic = require("../../utils/validateMic");
const crypto = require("crypto-random-string");

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

      //Create the link for editing the mic
      const hostUrl = crypto({ length: 15 });

      const newMic = new Mic({
        name,
        host,
        description,
        date,
        totalComedians,
        hostUrl,
        comedians: [],
      });
      const res = await newMic.save();

      return res;
    },

    async deleteMic(parent, args) {
      const { micId } = args;
      const res = await Mic.findByIdAndDelete(micId);
      return res;
    },

    async addComedian(parent, args) {
      const { micId, comedian } = args;

      //Check if the comedian has a name
      if (comedian.trim().length > 0) {
        const { comedians, totalComedians } = await Mic.findById(micId);

        //Check if the mic is full
        if (comedians.length < totalComedians) {
          comedians.push(comedian);

          const res = await Mic.findByIdAndUpdate(micId, { comedians });

          res.comedians = comedians;
          return res;
        } else {
          throw new Error("Mic is full");
        }
      } else {
        throw new Error("Comedian must have a name");
      }
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
  },
};
