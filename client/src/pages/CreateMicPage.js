import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { ADD_MIC } from "../queries/queries";

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

function CreateMicPage() {
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState(new Date());

  const classes = useStyles();

  const [addMic, { loading }] = useMutation(ADD_MIC, {
    update(proxy, result) {
      console.log(result);
      //here goes the set modal to true
    },
    onError(err) {
      if (err) {
        setErrors(err.graphQLErrors[0].extensions.errors);
      }
    },
  });

  console.log(errors);

  const [values, setValues] = useState({
    micName: "",
    hostName: "",
    venue: "",
    adress: "",
    city: "",
    postal: "",
    payment: "",
    capacity: "",
    notes: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mic = {
      micName: values.micName,
      date: moment(date).format(),
      hostName: values.hostName,
      venue: values.venue,
      adress: values.adress,
      city: values.city,
      postal: values.city,
      payment: values.payment,
      capacity: parseInt(values.capacity),
      notes: values.notes,
    };

    console.log(mic.capacity);

    addMic({ variables: mic });

    setValues({
      micName: "",
      hostName: "",
      venue: "",
      adress: "",
      city: "",
      postal: "",
      payment: "",
      capacity: "",
      notes: "",
    });

    setDate(new Date());
  };

  console.log(loading);

  //TODO:Implement form validation

  //TODO: creted mic modal with links

  console.log(Object.values(errors));

  return (
    <div className="create-mic-container">
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          id="micName"
          label="Mic Name"
          fullWidth
          value={values.micName}
          onChange={handleChange}
          error={Object.keys(errors).length > 0}
          helperText={errors.micName}
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
              error={Object.keys(errors).length > 0}
              helperText={errors.date}
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
          id="hostName"
          label="Host Name"
          fullWidth
          value={values.hostName}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={Object.keys(errors).length > 0}
          helperText={errors.hostName}
        />
        <TextField
          id="venue"
          label="Venue"
          fullWidth
          value={values.venue}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={Object.keys(errors).length > 0}
          helperText={errors.venue}
        />
        <TextField
          id="adress"
          label="Adress"
          fullWidth
          value={values.adress}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={Object.keys(errors).length > 0}
          helperText={errors.adress}
        />
        <span>
          <div style={{ width: "150px" }}>
            <TextField
              size="small"
              id="city"
              label="City"
              value={values.city}
              onChange={handleChange}
              className={classes.root}
              FormHelperTextProps={{
                className: classes.error,
              }}
              error={Object.keys(errors).length > 0}
              helperText={errors.city}
            />
          </div>
          <div style={{ width: "150px" }}>
            <TextField
              id="postal"
              label="Postal Code"
              value={values.postal}
              onChange={handleChange}
              className={classes.root}
              FormHelperTextProps={{
                className: classes.error,
              }}
              error={Object.keys(errors).length > 0}
              helperText={errors.postal}
            />
          </div>
        </span>
        <TextField
          id="payment"
          label="Payment information"
          fullWidth
          value={values.payment}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={Object.keys(errors).length > 0}
          helperText={errors.payment}
        />
        <TextField
          id="capacity"
          type="text"
          label="Total number of comedians (max 40)"
          fullWidth
          value={values.capacity}
          onChange={handleChange}
          className={classes.root}
          FormHelperTextProps={{
            className: classes.error,
          }}
          error={Object.keys(errors).length > 0}
          helperText={errors.capacity}
        />

        <TextField
          id="notes"
          label="Notes"
          type="text"
          multiline
          fullWidth
          value={values.notes}
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
