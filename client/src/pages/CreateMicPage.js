import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import moment from "moment";

const useStyles = makeStyles({
  root: {
    marginBottom: "10px",
  },
  btn: {
    marginTop: "20px",
  },
});

function CreateMicPage() {
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [host, setHost] = useState("");
  const [venue, setVenue] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [payment, setPayment] = useState("");
  const [capacity, setCapacity] = useState("");
  const [notes, setNotes] = useState("");

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
      name,
      date: moment(date).format(),
      host,
      venue,
      adress,
      city,
      postal,
      payment,
      capacity,
      notes,
    };

    console.log(mic);
  };
  return (
    <div className="create-mic-container">
      <p>Create a Mic</p>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="name"
          label="Mic Name"
          fullWidth
          value={name}
          onChange={handleChange}
          className={classes.root}
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
        />
        <TextField
          id="name"
          label="Venue"
          fullWidth
          value={venue}
          onChange={handleChange}
          className={classes.root}
        />
        <TextField
          id="adress"
          label="Adress"
          fullWidth
          value={adress}
          onChange={handleChange}
          className={classes.root}
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
            />
          </div>
          <div style={{ width: "150px" }}>
            <TextField
              id="postal"
              label="Postal Code"
              value={postal}
              onChange={handleChange}
              className={classes.root}
            />
          </div>
        </span>
        <TextField
          id="payment"
          label="Payment"
          fullWidth
          value={payment}
          onChange={handleChange}
          className={classes.root}
        />
        <TextField
          id="total"
          type="number"
          label="Mic capacity"
          fullWidth
          value={capacity}
          onChange={handleChange}
          className={classes.root}
        />
        <TextField
          id="description"
          label="Notes"
          multiline
          fullWidth
          value={notes}
          onChange={handleChange}
          className={classes.root}
        />
        <Button type="submit" variant="contained" className={classes.btn}>
          Create Mic
        </Button>
      </form>
    </div>
  );
}

export default CreateMicPage;
