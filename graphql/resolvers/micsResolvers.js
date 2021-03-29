const mics = [
  {
    id: "1",
    host: "Juan Nicolon",
    name: "Late night mic",
  },
  {
    id: "2",
    host: "Matt Hardy",
    name: "The experimental mic",
  },
];

module.exports = {
  Query: {
    mics: () => mics,
    mic: (parent, args) => {
      return mics.find((element) => element.id === args.id);
    },
  },
};
