import React, { Component, useEffect, useState } from  "react";
import axios from "axios";
import api from "../../api/api";
import covid from "./Covid.css"

export default function Covid() {

  const [id, setId] = useState([])
  const [countries, setCountries] = useState()
  const [idtitle, setIdTitle] = useState()

  useEffect (()=>{
    api.get('https://covid19-api.com/country/all?format=json').then((response)=>{
      setId(response.data);
    })
  },[id, countries])

  return (
        <div>
          <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-primary p-4">
              <h5 classNames="text-white h4">Aproveite o API</h5>
              <span className="text-white">https://github.com/cod3rleo<br/></span>
              <span className="text-white">https://www.linkedin.com/in/leeonardolima/ <br/></span>

              <div>
                <h2>Teste</h2>
              </div>
           
            </div>
          </div>
            <nav className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>
          </div>
            </nav>

      

      <div className="container-center">
       {id.map((item)=>(
          <div key={item.code}  className="container">
            <div className="card">
              <div>

              </div>
              <div className="card">
                <ul className="list-group">
                <li className="list-group-item active" aria-current="true">{item.country}  ({item.code})
                <input onClick={(e)=>setCountries(e.target.value)} className="form-check-input d-flex" type="checkbox" value="" aria-label="..."></input></li>
                <li className="list-group-item">Confimados: {item.confirmed}</li>
                <li className="list-group-item">Recuperados:  {item.recovered}</li>
                <li className="list-group-item">Críticos:  {item.critical}</li>
                <li className="list-group-item">Mortos:  {item.deaths}</li>
              </ul>
               
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
    
  );
}

