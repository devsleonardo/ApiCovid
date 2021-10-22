import React from "react";

const Card =(props) => {

  const {
  totalrecovered,
  totalcritical,
  totaldeaths,
  country
} = props;

  return(
    <div className="card">
      <h2 className="text-center" > {country === ''? 'Grafico Coronavirus' : country}</h2>
      {props.children}
      <div className="btn my-3" style={{display:"flex", justifyContent:"center"}} type="text">
        <span className="btn my-2">Total Recuperados: </span><br/>
        <span className="btn my-2">{totalrecovered}</span>
        <span className="btn my-2">Total Criticos: </span><br/>
        <span className="btn my-2">{totalcritical}</span>
        <span className="btn my-2">Total Mortos: </span><br/>
        <span className="btn my-2">{totaldeaths}</span>
      </div>
    </div>

  )
}

export default Card;