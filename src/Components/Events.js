import React, { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";



const Events = (props) => {
    const url = `https://byabbe.se/on-this-day/${props.month}/${props.day}/events.json`
    console.log(url)
    const [data, setData] = useState([]);
  useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data.events);
    });
  }, [url]);
const content = data.map((content) => 
{return <><div>{content.year}</div><div>{content.description}</div></>}
)

  return(
    <div>
    {content}
  </div>
  )
}

export default Events