import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import './Styles/MyStyles.css'


function Login() {
    const [carnet, setCarnet] = useState('')
    const [password1, setPassword1] = useState('')

    const [cookies, setCoookies] = useCookies(['usuario'])

    const Navegador = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        if (carnet === "12024" && password1 === "@dminIPC1") {
            Navegador('/admin')
        } else {
            const dataJson = {
                carnet: carnet,
                password: password1
            }

            fetch(`http://localhost:5000/login`, {
                method: "POST", // Utiliza el método POST
                body: JSON.stringify(dataJson), // Convierte el objeto 'data' a formato JSON y lo envía en el cuerpo de la solicitud
                headers: {
                    "Content-Type": "application/json", // Establece el tipo de contenido de la solicitud como JSON
                },
            })
                .then((response) => response.json())
                .then((res) => {

                    if (res.encontrado === true) {
                        const dataUser = res.datos
                        console.log(dataUser)

                        alert(`Bienvenido ${dataUser.nombre}`)
                        setCoookies('usuario', dataUser)
                        Navegador('/home')
                    } else {
                        alert("Credenciales incorrectas")
                    }
                })
                .catch((error) => console.error(error))

        }

    }

    const boton = ()=>{
        Navegador('/Registro')
    }

    return (
        <div className="login-backeground">
            <div className="container-fluid h-100">
                <div className="row align-items-center h-100">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center mb-4">San Carlos Social Club</h1>
                                <h3 className="card-title text-center mb-4">Inicio de Sesión</h3>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatInput"
                                            placeholder="Ingrese su carnet"
                                            aria-label="Ingrese su carnet"
                                            onChange={(e) => setCarnet(e.target.value)}
                                            value={carnet}
                                        />
                                        <label>Carnet</label>
                                    </div>

                                    <div className="form-floating">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="floatInput"
                                            placeholder="Ingrese su carnet"
                                            onChange={(e) => setPassword1(e.target.value)}
                                            value={password1}
                                        />
                                        <label>Password</label>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                                    </div>

                                    

                                </form>
                                <div className="card-title text-center mb-4">
                                    <button type="button" className="btn btn-link" onClick={boton}>Registrarse</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;