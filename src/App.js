import React, { useEffect, useState } from "react";
import {Bar} from "react-chartjs-2";
import Covid from "./Components/Covid/index";
import BarGraph from "../src/Components/BarGraph/index"
import Navbar from "./Components/navbar";
import Card from "./Components/Card";
import api from "./api/api";


export default function App() {


  return (
    <>
      <Navbar/>
      <Card 
      totalrecovered={0}
      totalcritical={0}
      totaldeaths={0}
      country={""}
      />
      <BarGraph/>
      <Covid/>
    </>
  );
}


