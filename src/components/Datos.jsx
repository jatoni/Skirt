import Dato from "./Dato"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const Datos = ({ usuario }) => {
    return (
        <div className="w-full border border-orange-900 h-60">
            <div className="flex justify-center items-center">
                <div className="w-1/2 text-center">
                    <div className="w-full h-4">
                        <CircularProgressbar
                            value={20}
                            text={"20% de agua"}
                        />
                    </div>
                </div>

                <div className="w-1/2 text-center flex flex-nowrap flex-col justify-evenly">
                    <p>Nombre de usuario</p>
                    <p>Humedad de tierra</p>
                    <p>Cantidad de veces que se riega el al dia</p>
                </div>
            </div>
            {/* {usuario.map(user => (
                <Dato 
                    user={user}
                    key={user.id}
                />
            )
            )} */}
        </div>
    )
}

export default Datos