import Formulario from "./Formulario"
import Registrar from "./Registrar"
const Login = () => {
    return (
        <>
            <div className="mt-12 md:flex">
                <Formulario />
                <Registrar />
            </div>
        </>
    )
}

export default Login