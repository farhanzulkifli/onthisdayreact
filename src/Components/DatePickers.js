import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Events from "./Events";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function DatePickers(props) {
  const history = useHistory();

  const handleextract = (event) => {
    const selectedDate = event.target.value;
    const selectedDay = new Date(selectedDate).getDate();
    props.setDay(selectedDay);
    const selectedMonth = new Date(selectedDate).getMonth() + 1;
    props.setMonth(selectedMonth);
    console.log(selectedMonth, selectedDay);
    // history.push("/display")
  };
  const classes = useStyles();
  return (
    <TextField
      id="date"
      label="Birthday"
      type="date"
      defaultValue="1985-10-30"
      className={classes.textField}
      InputLabelProps={{
        shrink: true,
      }}
      onChange={handleextract}
    />
  );
}
