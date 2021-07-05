import React, { useState, useEffect } from "react";
import { useParams } from "react-router";


const Events2 = () => {
    const params = useParams();
    console.log(params)
    const url = `https://byabbe.se/on-this-day/${params.month}/${params.day}/events.json`
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

export default Events2