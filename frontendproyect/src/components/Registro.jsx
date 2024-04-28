import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './Styles/MyStyles.css'


function Registro() {
  const Navegador = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const boton = ()=>{
    Navegador('/Login')
  }
  return (
    <div className="registro-backeground">
      <div className="container-fluid h-100">
        <div className="row align-items-center h-100">
          <div className="col-md-6 mx-auto">
            <div className="card">
              <div className="card-body">
                <form class="px-md-2">

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="text" id="form3Example1q" class="form-control" />
                    <label class="form-label" for="form3Example1q">Numero de Carnet/Codigo USAC</label>
                  </div>


                  <div class="row">
                    <div class="col-md-6 mb-4">

                      <div data-mdb-input-init class="form-outline">
                        <input type="text" id="firstName" class="form-control form-control-lg" />
                        <label class="form-label" for="firstName">Nombre</label>
                      </div>

                    </div>
                    <div class="col-md-6 mb-4">

                      <div data-mdb-input-init class="form-outline">
                        <input type="text" id="lastName" class="form-control form-control-lg" />
                        <label class="form-label" for="lastName">Apellido</label>
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 d-flex align-items-center">

                      <div data-mdb-input-init class="form-outline datepicker w-100">
                        <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                        <label for="birthdayDate" class="form-label">Correo electronico</label>
                      </div>

                    </div>
                    <div class="col-md-6 mb-4">

                      <h6 class="mb-2 pb-1">Genero: </h6>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="option1" checked />
                        <label class="form-check-label" for="femaleGender">Femenino</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="option2" />
                        <label class="form-check-label" for="maleGender">Masculino</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                          value="option3" />
                        <label class="form-check-label" for="otherGender">Otro</label>
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input type="email" id="emailAddress" class="form-control form-control-lg" />
                        <label class="form-label" for="emailAddress">Facultad</label>
                      </div>

                    </div>
                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                        <label class="form-label" for="phoneNumber">Carrera</label>
                      </div>

                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input type="email" id="emailAddress" class="form-control form-control-lg" />
                        <label class="form-label" for="emailAddress">Contraseña</label>
                      </div>

                    </div>

                    <div class="col-md-6 mb-4 pb-2">

                      <div data-mdb-input-init class="form-outline">
                        <input type="email" id="emailAddress" class="form-control form-control-lg" />
                        <label class="form-label" for="emailAddress">Confirmar Contraseña</label>
                      </div>

                    </div>
                  </div>

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-success btn-lg mb-1">Registrarse</button>
                  <div className="card-title text-center mb-4">
                    <label>Ya tienes cuenta?</label>
                    <button type="button" className="btn btn-link" onClick={boton}>Iniciar sesion</button>
                  </div>

                </form>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default Registro;