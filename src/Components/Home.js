import React from "react";
import { useState, useEffect } from "react";
import DatePickers from "./DatePickers";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Events from "./Events";
import Display from "./Display";

function Home() {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);
  console.log("day",day,"month",month)
  
  return (
    <div>
      <h1>Hello! You look like a mouthbreather (haha)</h1>
      <p>Anyways, no one really cares, but humour me with your birthday?</p>
      <DatePickers setDay={setDay} setMonth={setMonth} />
      <Display day={day} month={month} />
      <Link to="/Events">Test</Link>
    </div>
  );
}

export default Home;
