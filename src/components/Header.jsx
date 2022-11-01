import CerrarSession from "./CerrarSession";

const Header = ( { usuario }) => {
    return (
        <>
            <header className="w-full bg-white shadow-lg">
                <div className="list-none">
                    <h1 className="text-center p-5 text-5xl font-bold uppercase">
                        Sistema de {""}
                        <span className="text-green-900">riego</span>
                    </h1>
                </div>
                <CerrarSession
                    usuario={usuario}
                />
            </header>
        </>
    )
}

export default Header