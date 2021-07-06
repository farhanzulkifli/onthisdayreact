import React, { useState } from "react";
import Timeline from "timelinejs-react";
import Events2 from "./Events2";

//  const x = {"year":"2012", "description":"fun"}
//  const z = {"start_date": {"year":x.year},"text":{"text":x.description}}

//  const transform = (x) =>{
//     return {"start_date": {"year":x.year},"text":{"text":x.description}}
//  }

//  console.log(transform(x))
// console.log("x",x)
//  console.log("z",z)
// const events = z
// console.log("events",events)

const MyComponent = (props) => {
  const events = [];
  console.log("events", events);
  const title = {};
  const options = {};
  console.log("props", props.data);
  const trial = 
    <Timeline
      target={<div className="timeline" />}
      events={props?.data}
      title={title} // optional
      options={options} // optional
    />
  
  return props.data.length <= 0 ? <p>Loading!</p> : trial;
};
export default MyComponent;
