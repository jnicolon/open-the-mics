module.exports = (mic) => {
  const errors = {};

  if (mic.name.trim() === "") {
    errors.name = "The mic has to have a name";
  }

  if (mic.host.trim() === "") {
    errors.host = "The mic has to have a host";
  }

  const micDate = new Date(mic.date);
  const todayDate = new Date();

  if (mic.date.trim() === "") {
    errors.date = "The mic has to have a date";
  } else if (micDate.getTime() < todayDate.getTime()) {
    errors.date = "The mic must be in the future";
  }

  if (mic.totalComedians < 5) {
    errors.totalComedians = "The mic must have at least 5 comedians";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
