import { useState } from "react";
import Error from "./Error";
const Registrar = () => {

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
    }

    const quitMessage = (e) =>{
        e.preventDefault();
        setError(false);
    }

    const showPassword = (e) => {
        e.target.type = "text";
        setTimeout(() => {
            e.target.type = "password"
        }, 100);
        quitMessage();
    }

    return (
        <div className="md:w-1/2 lg:w-3/5 bg-green-50">
            <h2 className="font-black text-3xl text-center">Registrarse</h2>
            <p className="text-lg mt-5 mb-10 text-center">Si no tiene una cuenta,{" "}
                <span className="text-green-900">puedes crear tu cuenta</span></p>

            <div className="md:h-screen">
                <form
                    onSubmit={handleSubmit}
                    className="w-11/12 bg-lime-200 shadow-md rounded-lg mx-auto py-10 px-5 mb-10"
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