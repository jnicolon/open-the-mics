module.exports = (mic) => {
  const {
    micName,
    hostName,
    date,
    capacity,
    adress,
    city,
    postal,
    venue,
  } = mic;

  const errors = {};

  if (micName.trim() === "") {
    errors.micName = "The mic has to have a name";
  }

  if (hostName.trim() === "") {
    errors.hostName = "The mic has to have a host";
  }

  const micDate = new Date(date);
  const todayDate = new Date();

  if (date.trim() === "") {
    errors.date = "The mic has to have a date";
  } else if (micDate.getTime() < todayDate.getTime()) {
    errors.date = "The mic must be in the future";
  }

  if (capacity < 5) {
    errors.capacity = "The mic must have at least 5 comedians";
  }

  if (adress.trim() === "") {
    error.adress = "Adress can't be empty";
  }

  if (city.trim() === "") {
    error.city = "City can't be empty";
  }

  if (postal.trim() === "") {
    error.postal = "Postal code can't be empty";
  }

  if (venue.trim() === "") {
    error.city = "Venue can't be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
