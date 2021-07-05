// import React from "react";
// import { useState, useEffect,createContext } from "react";
// import DatePickers from "./DatePickers";
// import { Switch, Route, Link, Redirect } from "react-router-dom";
// import Events from "./Events";
// import Display from "./Display";

// export const SendData = createContext()

// function Home() {
//   const [day, setDay] = useState(null);
//   const [month, setMonth] = useState(null);
//   console.log("day",day,"month",month)
//   const superprop = {day:day, month:month}
//   return (
//     <SendData.Provider value = {superprop}>
//     <div>
//       <h1>Hello! You look like a mouthbreather (haha)</h1>
//       <p>Anyways, no one really cares, but humour me with your birthday?</p>
//       <DatePickers setDay={setDay} setMonth={setMonth} />
//       <Display/>
//       {/* <Link to="/Events">Test</Link> */}
//     </div>
//     </SendData.Provider>
//   );
// }

// export default Home;
