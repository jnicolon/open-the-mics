import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import moment from "moment";
import { useMutation, gql } from "@apollo/client";

const useStyles = makeStyles({
  root: {
    marginBottom: "10px",
  },
  btn: {
    marginTop: "20px",
  },
  error: {
    "&.MuiFormHelperText-root.Mui-error": {
      fontSize: "0.8rem",
    },
  },
  sliderWidth: {
    width: "50px",
  },
});

const ADD_MIC = gql`
  mutation createMic(
    $micName: String!
    $hostName: String!
    $notes: String!
    $date: String!
    $capacity: Int!
    $adress: String!
    $city: String!
    $postal: String!
    $venue: String!
    $payment: String!
  ) {
    createMic(
      micName: $micName
      hostName: $hostName
      notes: $notes
      date: $date
      capacity: $capacity
      adress: $adress
      city: $city
      postal: $postal
      venue: $venue
      payment: $payment
    ) {
      micName
      hostUrl
      id
    }
  }
`;

function CreateMicPage() {
  const [addMic, { data }] = useMutation(ADD_MIC, {
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
  });
  //
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [host, setHost] = useState("");
  const [venue, setVenue] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [payment, setPayment] = useState("");
  const [capacity, setCapacity] = useState("");
  const [capacityError, setCapacityError] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState("");

  const classes = useStyles();

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setName(e.target.value);
        break;
      case "host":
        setHost(e.target.value);
        break;
      case "venue":
        setVenue(e.target.value);
        break;
      case "adress":
        setAdress(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "postal":
        setPostal(e.target.value);
        break;
      case "payment":
        setPayment(e.target.value);
        break;
      case "capacity":
        setCapacity(e.target.value);
        break;
      case "notes":
        setNotes(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mic = {
      micName: name,
      date: moment(date).format(),
      hostName: host,
      venue,
      adress,
      city,
      postal,
      payment,
      capacity: parseInt(capacity),
      notes,
    };

    if (mic.capacity && errors !== "") {
      addMic({ variables: mic });
    } else {
      setCapacityError("This value should be a number");
    }
  };

  console.log(errors);

  //TODO:Implement form validation

  return (
    <div className="create-mic-container">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Mic Name"
          fullWidth
          value={name}
          onChange={handleChange}
          // error
          // helperText="Incorrect text"
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <span>
          <div style={{ width: "175px" }}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Mic Date"
              value={date}
              onChange={(date) => setDate(date)}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              // error
              // helperText="Incorrect text"
              FormHelperTextProps={{
                className: classes.error,
              }}
            />
          </div>
          <div style={{ width: "125px" }}>
            <KeyboardTimePicker
              margin="normal"
              id="time-picker"
              label="Mic time"
              value={date}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
              onChange={(date) => setDate(date)}
              FormHelperTextProps={{
                className: classes.error,
              }}
            />
          </div>
        </span>
        <TextField
          id="host"
          label="Host Name"
          fullWidth
          value={host}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <TextField
          id="venue"
          label="Venue"
          fullWidth
          value={venue}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <TextField
          id="adress"
          label="Adress"
          fullWidth
          value={adress}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <span>
          <div style={{ width: "150px" }}>
            <TextField
              size="small"
              id="city"
              label="City"
              value={city}
              onChange={handleChange}
              className={classes.root}
              FormHelperTextProps={{
                className: classes.error,
              }}
            />
          </div>
          <div style={{ width: "150px" }}>
            <TextField
              id="postal"
              label="Postal Code"
              value={postal}
              onChange={handleChange}
              className={classes.root}
              FormHelperTextProps={{
                className: classes.error,
              }}
              // error
              // helperText="Incorrect text"
            />
          </div>
        </span>
        <TextField
          id="payment"
          label="Payment information"
          fullWidth
          value={payment}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <TextField
          id="capacity"
          type="text"
          label="Number of max comedians for the mic"
          fullWidth
          value={capacity}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={capacityError === "" ? false : true}
          helperText={capacityError === "" ? "" : capacityError}
        />

        <TextField
          id="notes"
          label="Notes"
          type="text"
          multiline
          fullWidth
          value={notes}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
        />
        <Button type="submit" variant="contained" className={classes.btn}>
          Create Mic
        </Button>
      </form>
    </div>
  );
}

export default CreateMicPage;
