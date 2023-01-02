import { useState } from "react";
import Error from "./Error";
const Registrar = ({ registarUsuario, usuarioCreado}) => {

    const [registro, setRegistro] = useState({
        nombre: "",
        apellidos: "",
        usuario: "",
        correo: "",
        password: "",
    })
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { nombre, apellidos, usuario, correo, password } = registro
        if ([nombre, apellidos, usuario, correo, password].includes('')) {
            setError(true);
            return;
        }
        setError(false);
        registarUsuario(registro);
        if (usuarioCreado) {
            setRegistro({
                nombre: "",
                apellidos: "",
                usuario: "",
                correo: "",
                password: "",
            });

        }
    }

    const handleChange = e => {
        setRegistro({
            ...registro,
            [e.target.name]: e.target.value,
        })
    }

    const quitMessage = (e) => {
        setError(false);
    }

    const showPassword = (e) => {
        setError(false);
        e.target.type = "text";
        setTimeout(() => {
            e.target.type = "password"
        }, 100);
    }

    return (
        <div className="md:w-1/2 lg:w-1/2 bg-green-50 border border-green-50 m-auto">
            <h2 className="font-black text-3xl text-center">Registrarse</h2>
            <p className="text-lg mt-5 mb-10 text-center">Si no tiene una cuenta,{" "}
                <span className="text-green-900">puedes crear tu cuenta</span></p>

            <div className="mb-10">
                <form
                    onSubmit={handleSubmit}
                    className="w-11/12 bg-lime-200 shadow-md rounded-lg mx-auto py-10 px-5"
                >
                    {!error
                        ? null
                        : <Error>Todos los campos son obligatorios</Error>
                    }
                    <div className="mb-5">
                        <label htmlFor="nombre" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                            Nombre
                        </label>
                        <input
                            id="nombre"
                            name="nombre"
                            placeholder="Ingresa tu nombre:"
                            className="w-full rounded-md p-2 outline-none"
                            onInput={quitMessage}
                            onChange={handleChange}
                            registro={registro.nombre}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="apellidos" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                            Apellidos
                        </label>
                        <input
                            id="apellidos"
                            name="apellidos"
                            placeholder="Ingresa tu apellido:"
                            className="w-full rounded-md p-2 outline-none"
                            onInput={quitMessage}
                            onChange={handleChange}
                            registro={registro.apellidos}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="usuario" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                            Usuario
                        </label>
                        <input
                            id="usuario"
                            name="usuario"
                            placeholder="Ingresa tu nombre de usuario"
                            className="w-full rounded-md p-2 outline-none"
                            onInput={quitMessage}
                            onChange={handleChange}
                            registro={registro.usuario}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="correo" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                            Correo
                        </label>
                        <input
                            id="correo"
                            name="correo"
                            placeholder="Ingresa tu correo"
                            className="w-full rounded-md p-2 outline-none"
                            onInput={quitMessage}
                            onChange={handleChange}
                            registro={registro.correo}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password2" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                            Contraseña
                        </label>
                        <input
                            id="password2"
                            name="password"
                            type="password"
                            placeholder="Ingresa tu nombre de contraseña"
                            className="w-full rounded-md p-2 outline-none"
                            onInput={showPassword}
                            onChange={handleChange}
                            registro={registro.password}
                        />
                    </div>
                    <input
                        type="submit"
                        className="bg-lime-900 rounded-md uppercase w-full font-bold text-white p-3 hover:bg-lime-700 cursor-pointer transition duration-700 ease-in-out"
                        value='Crear'
                    />
                </form>
            </div>
        </div>
    )
}

export default Registrar