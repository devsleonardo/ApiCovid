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
                <li className="list-group-item">Recuperados:  {item.recovered}</li>
                <li className="list-group-item">Críticos:  {item.critical}</li>
                <li className="list-group-item">Mortos:  {item.deaths}</li>
              </ul>
               
              </div>
                <div class="btn-group">
                  <button type="button" className="btn-sm btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Veja Mais+</button>
                  <ul class="dropdown-menu">
                    <li className="dropdown-item">Confimados: {item.confirmed}</li>
                    <li className="dropdown-item">Latitude: {item.latitude}</li>
                    <li className="dropdown-item">Longitude: {item.longitude}</li>
                    <li className="dropdown-item">Última Mudança: {item.lastChange}</li>
                    <li className="dropdown-item">Última Atualização: {item.lastUpdate}</li>
                  </ul>
                </div>
            </div>
          </div>
          ))}
      </div>
    </div>
    
  );
}

