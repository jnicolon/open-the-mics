import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { KeyboardDatePicker, KeyboardTimePicker } from "@material-ui/pickers";

function CreateMicPage() {
  return (
    <div className="create-mic-container">
      <p>Create a Mic</p>
      <form noValidate autoComplete="off">
        <TextField id="name" label="Mic Name" fullWidth />
        <span>
          <div style={{ width: "175px" }}>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Mic Date"
              // value={selectedDate}
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
              // value={selectedDate}
              // onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change time",
              }}
            />
          </div>
        </span>
        <TextField id="host" label="Host Name" fullWidth />
        <TextField id="name" label="Venue" fullWidth />
        <TextField id="adress" label="Adress" fullWidth />
        <span>
          <div style={{ width: "150px" }}>
            <TextField size="small" id="city" label="City" />
          </div>
          <div style={{ width: "150px" }}>
            <TextField id="postal" label="Postal Code" />
          </div>
        </span>
        <TextField id="payment" label="Payment type" fullWidth />
        <TextField id="total" type="number" label="Mic capacity" fullWidth />
        <TextField id="description" label="Notes" multiline fullWidth />
        <Button variant="contained">Create Mic</Button>
      </form>
    </div>
  );
}

export default CreateMicPage;
