import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';

function Registro(){
const Navegador = useNavigate()

const handleSubmit = (event) => {
  event.preventDefault();
}
    return(
      <div className="login-backeground">
        <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
        <div className="col-md-6 mx-auto">
        <div className="card">
        <div className="card-body">

        </div>
        </div>            
        </div>          
        </div>              
        </div>
      </div>
      
    )
}
export default Registro;