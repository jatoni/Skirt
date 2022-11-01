import Formulario from "./Formulario"
import Registrar from "./Registrar"
const Login = ({ acceso }) => {
    return (
        <>
            <div className="mt-12 md:flex">
                <Formulario
                    acceso={acceso}
                />
                <Registrar />
            </div>
        </>
    )
}

export default Login