import Dato from "./Dato"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Datos = ({ mensaje }) => {
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
                <p>Nombre de usuario:{" "}<span className="text-green-900 font-mono font-bold text-xl">{mensaje}</span></p>
                <p>Humedad de tierra</p>
                <p>Cantidad de veces que se riega el al dia</p>
            </div>
        </div>
    )
}

export default Datos