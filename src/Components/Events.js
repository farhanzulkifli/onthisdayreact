// import React, { useState, useEffect, useContext } from "react";
// import { Switch, Route, Link, Redirect } from "react-router-dom";
// import { SendData } from './Home'


// const Events = () => {
//     const ReceiveData = useContext(SendData);
//     const url = `https://byabbe.se/on-this-day/${ReceiveData.month}/${ReceiveData.day}/events.json`
//     console.log(url)
//     const [data, setData] = useState([]);
//   useEffect(() => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       setData(data.events);
//     });
//   }, [url]);
// const content = data.map((content) => 
// {return <><div>{content.year}</div><div>{content.description}</div></>}
// )
// // const contentyear = data[0]
// // console.log(contentyear)
// // const contentdescription = data[0].description
// // console.log("content",content)

//   return(
//     <div>
//     {content}
//     {/* {contentyear} */}
//     {/* {contentdescription} */}
//   </div>
//   )
// }

// export default Events