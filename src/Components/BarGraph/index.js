import React from "react";
import {Bar} from "react-chartjs-2"

const LineGraph = (props) =>{
  return(
    <div style={{height:"300px",width:"600px",margin:"50px auto"}}>
        <Bar data ={{
          labels:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro",],
          datasets:[{
            label: "Grafico Covid-19",
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.4)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(255, 206, 86, 0.4)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(255, 159, 64, 0.6)',
            ] ,
            bordeWidth:4,
            data:[100,0,598,2,98,95,98,6,59,599,292],
          }
          ]
        }}/>
    </div>
  )}

export default LineGraph