
const Mensaje = ({ children }) => {
  return (
    <div className="w-10/12 shadow-md m-auto text-center p-3 border border-x-green-300 bg-green-300 rounded-md text-neutral-50 font-bold border-x-2">
        <h1 className={`text-3xl `}>{children}</h1>
    </div>
  )
}

export default Mensaje