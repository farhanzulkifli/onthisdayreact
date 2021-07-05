// import { makeStyles } from "@material-ui/core/styles";
// import Text from "@material-ui/core/TextField";
// import React, { useState, useEffect } from "react";
// import { Switch, Route, Link, Redirect } from "react-router-dom";
// import Events from "./Events";
// import { useHistory } from "react-router";
// export default function DatePickers2(props) {
//     const history = useHistory();
//     const [state, setstate] = useState("")


//   const handleextract = (event) => {
//     // const selectedDate = event.target.value;
//     // const selectedDay = new Date(selectedDate).getDate();
//     // props.setDay(selectedDay);
//     // const selectedMonth = new Date(selectedDate).getMonth() + 1;
//     // props.setMonth(selectedMonth);
//     // console.log(selectedMonth, selectedDay);
//     // history.push("/display")
//     console.log(state);
//   };
//   return (
//     <div>
//         <Text
//           id="month"
//           label="Month"
//           defaultValue="July"
//           textvalue = {state} 
//           //   onChange={handleextract}
//         />
//         <Text
//           id="day"
//           label="Day"
//           defaultValue="29"
//           //   onChange={handleextract}
//         />
//         <button onClick = {handleextract}>Submit</button>
//     </div>
//   );
// }
