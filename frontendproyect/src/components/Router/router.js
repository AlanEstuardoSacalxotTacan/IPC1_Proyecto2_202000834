import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../Login'
import Administrador from '../Admin'
import Registro from '../Registro';
function Router() {

    return (
        <BrowserRouter>
            <Routes>
            <Route  path='/'  element={<Navigate to="/login"/>} />
                <Route  path='/login'  element={<Login/>} />
                <Route  path='/admin'  element={<Administrador/>} />
                <Route  path='/registro'  element={<Registro/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;