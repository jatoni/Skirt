import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Datos = ({ usuario, cerrarSession }) => {
    return (
        <div className="contenedor contenedor-presupuesto sombra md:w-1/2">
            <div className="">
                <CircularProgressbar
                    value={30}
                    text={"20% AGUA"}
                    styles={buildStyles({
                        pathColor: "#69b686",
                        trailColor: "#f5f5f5",
                        textColor: "#69b686",
                        textSize: ".9rem"
                    })
                    }
                />
            </div>

            <div className="flex flex-col">
                <p>Nombre de usuario:{" "}<span className="text-green-900 font-mono font-bold text-xl">{usuario}</span></p>
                <p>Humedad de tierra</p>
                <p>Cantidad de veces que se riega el al dia</p>
                <p onClick={cerrarSession} className='cursor-pointer bg-teal-800 text-center p-2 rounded-lg text-white font-bold hover:bg-teal-300 ease-in-out'>Cerrar Sesion</p>
            </div>
        </div>
    )
}

export default Datos