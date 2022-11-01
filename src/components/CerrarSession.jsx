const CerrarSession = ({ usuario }) => {

    console.log(usuario);
    return (
        <>
            {
                usuario === 200
                    ?
                    <>
                        <div className="w-full flex justify-end py-1 px-2">
                            <p className="w-32 bg-green-100 text-center px-1 py-1 rounded-md font-bold hover:cursor-pointer hover:bg-green-200 transition-all ease-in-out">
                                Cerrar session
                            </p>
                        </div>
                    </>
                    :
                    null
            }
        </>
    )
}
export default CerrarSession