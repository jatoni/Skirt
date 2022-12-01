function Opciones({ setOpciones, opciones }) {
    return (
        <div className="flex p-4 w-full justify-center items-center">
            <p
                onClick={() => setOpciones(false)}
                className={`w-40 text-center mx-5 p-2 rounded-md bg-white hover:bg-lime-500 hover:text-green-900 text-black font-bold cursor-pointer ease-in-out duration-500 ${!opciones ? 'color-verde' : 'color-blanco'}`}
            >
                Ingresar
            </p>
            <p
                onClick={() => setOpciones(true)}
                className={`w-40 text-center mx-5 p-2 rounded-md bg-white hover:bg-lime-500 hover:text-green-900 text-black font-bold cursor-pointer ease-in-out duration-500 ${opciones ? 'color-verde' : 'color-blanco'}`}
            >
                Registrarse
            </p>
        </div>
    )
}

export default Opciones