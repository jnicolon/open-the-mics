import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  closePop: {
    position: "relative",
    left: "150px",
    textDecoration: "bold",
    cursor: "pointer",
  },
}));

function MicCreated({ adress, setSuccess }) {
  const classes = useStyles();

  return (
    <div className="mic-created-popup">
      <Typography variant="h5" align="center">
        Mic Created Succesfully!
      </Typography>
      <br />
      <Typography variant="subtitle1" align="center">
        Save this link!
      </Typography>
      <div className="pop-up-adress-container">
        <Typography variant="subtitle2">
          http://www.openthemics.com/hostmics/{adress}
        </Typography>
      </div>

      <br />
      <Typography variant="subtitle1" align="center">
        You can use it to:
      </Typography>
      <Typography variant="subtitle2" align="center">
        -Invite people
      </Typography>
      <Typography variant="subtitle2" align="center">
        - Keep track of who paid
      </Typography>

      <Typography variant="subtitle2" align="center">
        -Randomize order
      </Typography>
      <br />
      <Link to={`/hosts/${adress}`}>
        <Typography variant="overline">Click here to go to the mic</Typography>
      </Link>
      <p
        onClick={() => {
          setSuccess(false);
        }}
        className={classes.closePop}
      >
        X
      </p>
    </div>
  );
}

export default MicCreated;
