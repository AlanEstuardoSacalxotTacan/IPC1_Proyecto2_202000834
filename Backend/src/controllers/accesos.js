const { list_users } = require('../DataList/datalist')
const Usuario = require('../objects/Users')

//Carga masiva de usuarios
function CargaMasiva(req, res) {
    try {
        const usersArray=req.body
        console.log(usersArray)
        for (const userData of usersArray) {
            const { codigo, nombre, apellido, genero, facultad, carrera, correo, contrasena } = userData;
            const newUser = new Usuario(codigo, nombre, apellido, genero, facultad, carrera, correo, contrasena);
            list_users.push(newUser);
        }
       
        res.json(
            {
                mensaje: "Usuarios Agregados correctamente"
            }
        )
    } catch (error) {
        console.log(error)
        return res.json(
            {
                error: "Ocurrió un error al realziar la carga masiva de usuarios"
            }
        )
    }
}

function SignUp(req, res) {

    try {
        
        const { codigo, nombre, apellido, genero, facultad, carrera, correo, contrasena } = req.body //Aquí obtenemos el valor de cada atributo que nos mandan en el JSON
        // Verificar si el carnet ya está en uso
        const usuarioExiste = list_users.find(x_user => x_user.codigo === codigo)
        
        //Si el usuario existe se nos retorna el elemento donde esta guardado en la lista, sino existe se retorna un "null" o un "undefined" 
        if (usuarioExiste) {
            return res.json({ error: 'El carnet ya está registrado.' });
        }

         // Si el carnet no está en uso, crear una nueva instancia de Usuario con los datos proporcionados
        const newUser = new Usuario(codigo, nombre, apellido, genero, facultad, carrera, correo, contrasena)
        list_users.push(newUser)  // Agregar el nuevo usuario a la lista

        // Enviar una respuesta como json con el mensaje de confirmación
        return res.json({ mensaje: 'Usuario agregado correctamente :D' });

    } catch (error) {
        console.log(error)
        // Si ocurre algún error, enviar una respuesta como json diciendo que ocurrió un error
        return res.json(
            {
                error: "Ocurrió un error en el registro de Usuario"
            }
        )
    }
}

function GetAllUsers(req, res) {
    try {
        //Enviamos como respuesta en un json toda la lista de usuarios que tenemos (list_users)
        res.json(
            {
                usuarios: list_users
            }
        )
    } catch (error) {
        console.log(error)
        return res.json(
            {
                error: "Ocurrió un error al obtener todos los usuarios"
            }
        )
    }
}

function Login(req, res) {
    try {
       
        const carnet1 = req.body.codigo
        const password1 = req.body.contrasena

        // Buscar el usuario en la lista por su carnet y contraseña 
        const usuarioEncontrado = list_users.find(x_user => x_user.codigo === carnet1 && x_user.contrasena === password1)
        
        //Si las credenciales son correctas, se nos retorna el elemento donde esta guardado en la lista, sino existe se retorna un "null" o un "undefined" 
        if (usuarioEncontrado) {

            //Construimos un JSON retornando todos los datos del usuario, menos su contraseña
            const userFind={
                codigo: usuarioEncontrado.codigo,
                nombre:usuarioEncontrado.nombre,
                apellido:usuarioEncontrado.apellido,
                facultad:usuarioEncontrado.facultad,
            }

            //Respondemos con un JSON, el cual lleva un booleano (encontrado) para indicar si las credenciales son correctas, además de los datos del usuario
            res.json(
                {
                    encontrado:true,
                    datos:userFind
                }
                
                )

        } else {
            //Entra a esta parte si al buscar al usuario se nos retorno un "null" o un "undefined" 
            //Respondemos con un JSON, el cual lleva un booleano (encontrado) para indicar si las credenciales son correctas y un mensaje de que las credenciales son incorrectas
            res.json(
                {   
                    encontrado:false,
                    error: "Carnet o contraseña incorrectos"
                }
            )
        }
    } catch (error) {
        console.log(error)
        // Si ocurre algún error, enviar una respuesta como json diciendo que ocurrió un error
        return res.json(
            {
                error: "Ocurrió un error en el login"
            }
        )
    }
}

//Exportamos todas las funciones que creamos para usarlos en "routes.js"
module.exports = {
    SignUp,
    GetAllUsers,
    Login, 
    CargaMasiva
}