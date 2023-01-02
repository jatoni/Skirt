
const Mensaje = ({ children }) => {
  return (
    <div className="w-10/12 m-auto text-center p-10 border border-x-green-300 bg-green-300 rounded-md">
        <h1 className={`text-5xl `}>{children}</h1>
    </div>
  )
}

export default Mensaje