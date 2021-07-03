import React from "react";
import { useState, useEffect } from "react";
import Events from "./Events";

const Display = (props) => {
  return (
    <div>
      <Events day={props.day} month={props.month} />
    </div>
  );
};

export default Display;
