import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_MICS } from "../queries/queries";

import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 200,
  },
});

function Home() {
  const { loading, error, data, refetch } = useQuery(GET_MICS);

  const classes = useStyles();

  useEffect(() => {
    refetch();
  }, [refetch]);

  console.log(data);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableBody>
          {data.getMics &&
            data.getMics.map((mic) => {
              return (
                <TableRow key={mic.id}>
                  <TableCell component="th" scope="row">
                    {mic.micName}
                  </TableCell>
                  <TableCell align="right">{mic.venue}</TableCell>
                  <TableCell align="right">{mic.date}</TableCell>
                  <TableCell align="right">{mic.notes}</TableCell>
                  <TableCell align="right">{mic.hostName}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Home;
