import React from "react";
import Events from "./Components/Events";
import DatePickers from "./Components/DatePickers";
import { useState, useEffect } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Components/Home";
import NotFoundPage from "./Components/NotFoundPage";
import Display from "./Components/Display";

const App = () => {
  const [day, setDay] = useState(1);
  const [month, setMonth] = useState(1);

  return (
    
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/404" component = {NotFoundPage}/>
        <Route exact path = "/events" component ={Events}/>
        <Route exact path = "/display" component ={Display}/>
        <Redirect to = "/404"/>
          {/* <DatePickers setDay={setDay} setMonth={setMonth} /> */}
          {/* <Route exact path = "/events" component={Events} day={day} month={month} /> */}
          </Switch>
    </Router>
  );
};

export default App;
// function Price(props) {
//   const [data, setData] = useState(null);
//   const params = useParams();
//   console.log("params", params);

//   useEffect(() => {
//     let URL = coindeskURL + params.currId;
//     console.log("URL", URL);
//     fetch(URL)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data.bpi.USD.rate);
//       });
//   }, [data]);
//   return data === null ? (
//     <div>LOADING BRO</div>
//   ) : (
//     <div>
//       <h1>Current price for {params.currId} is</h1>
//       <div className="price">USD {data}.</div>
//     </div>
//   );
// }
