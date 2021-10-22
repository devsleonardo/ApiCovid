import React from "react";
import {Bar} from "react-chartjs-2";
import Covid from "./Components/Covid/index";
import BarGraph from "../src/Components/BarGraph/index"
import Navbar from "./Components/navbar";


function App() {
  return (
    <>
      <Navbar/>
      <BarGraph/>
      <Covid/>
    </>
  );
}

export default App;
