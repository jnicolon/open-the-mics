import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";

function CreateMicPage() {
  const [selectedName, setSelectedName] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [selectedHost, setSelectedHost] = useState("");
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedAdress, setSelectedAdress] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedPostal, setSelectedPostal] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");
  const [selectedCapacity, setSelectedCapacity] = useState("");
  const [selectedNotes, setSelectedNotes] = useState("");

  return (
    <div className="create-mic-container">
      <p>Create a Mic</p>
      <form noValidate autoComplete="off">
        <TextField id="name" label="Mic Name" fullWidth value={selectedName} />
        <span>
          <div style={{ width: "175px" }}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Mic Date"
              value={selectedDate}
              // onChange={handleDateChange}
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
              value={selectedTime}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </div>
        </span>
        <TextField id="host" label="Host Name" fullWidth value={selectedHost} />
        <TextField id="name" label="Venue" fullWidth value={selectedVenue} />
        <TextField
          id="adress"
          label="Adress"
          fullWidth
          value={selectedAdress}
        />
        <span>
          <div style={{ width: "150px" }}>
            <TextField
              size="small"
              id="city"
              label="City"
              value={selectedCity}
            />
          </div>
          <div style={{ width: "150px" }}>
            <TextField id="postal" label="Postal Code" value={selectedPostal} />
          </div>
        </span>
        <TextField
          id="payment"
          label="Payment"
          fullWidth
          value={selectedPayment}
        />
        <TextField
          id="total"
          type="number"
          label="Mic capacity"
          fullWidth
          value={selectedCapacity}
        />
        <TextField
          id="description"
          label="Notes"
          multiline
          fullWidth
          value={selectedNotes}
        />
        <Button variant="contained">Create Mic</Button>
      </form>
    </div>
  );
}

export default CreateMicPage;
