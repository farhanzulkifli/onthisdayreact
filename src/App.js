import React, { useState, useEffect } from "react";

const url = "https://byabbe.se/on-this-day/7/29/events.json"

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setData(data.events[0].year);
    });
    return (
        {data}
    )
  }, [data]);
  return(
    <div>
    <p>{data}</p>
  </div>
  )
}

export default App
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



