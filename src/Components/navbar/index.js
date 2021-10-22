import React from "react";

export default function Navbar(){
  return(

    <div>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-primary p-4">
            <h5 classNames="text-white h4">Aproveite a API</h5>
            <span className="text-white">https://github.com/cod3rleo<br/></span>
            <span className="text-white">https://www.linkedin.com/in/leeonardolima/ <br/></span>

        
          </div>
        </div>
          <nav className="navbar navbar-dark bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span></button>
        </div>
      </nav>
    </div>
)
}
