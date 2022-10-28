

const Formulario = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5 mt-2">
            <h2 className="font-black text-3xl text-center">Inicio Sesion</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Inicie sesion para acceder al {""}
                <span className="text-green-900">panel</span>
            </p>

            <form
                className="bg-lime-200 shadow-md rounded-lg py-10 px-5 mb-10"
            >
                <div className="mb-5">
                    <label htmlFor="email" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        placeholder="Input Your Email:"
                        className="w-full rounded-md p-2 outline-none"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="block text-xl text-lime-700 uppercase font-bold hover:cursor-pointer">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Input your password"
                        className="w-full rounded-md p-2 outline-none"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-lime-900 rounded-md uppercase w-full font-bold text-white p-3 hover:bg-lime-700 cursor-pointer transition duration-700 ease-in-out"
                    value='Log in'
                />

            </form>
        </div>
    )
}

export default Formulario